import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { ProductContext } from '../productContext/ProductContext';

function AddProduct() {
	const [product, setProduct] = useState({});
	const { products, setProducts } = useContext(ProductContext);
	// Add Product to state
	const handleAddProduct = (e) => {
		if (e.target.name === 'name') {
			const name = (product.name = e.target.value);
			setProduct({ ...product, name });
		} else if (e.target.name === 'price') {
			const price = (product.price = e.target.value);
			setProduct({ ...product, price });
		} else if (e.target.name === 'weight') {
			const weight = (product.weight = e.target.value);
			setProduct({ ...product, weight });
		} else {
			const image = (product.image = e.target.files[0]);
			setProduct({ ...product, image });
		}
	};

	// Product Send To Server
	const uploadProduct = (e) => {
		const image = new FormData();
		image.set('key', '14966dcb668bd4afd338e132de02b3c7');
		image.append('image', product.image);
		axios.post(`https://api.imgbb.com/1/upload`, image).then((res) => {
			if (res.status === 200) {
				const imageUrl = (product.image = res.data.data.display_url);
				setProduct({ ...product, imageUrl });
				axios
					.post(
						`https://phassignment10.herokuapp.com/product/addproduct`,
						product
					)
					.then((result) => {
						if (result.status === 200) {
							toast.success('Product Upload Successfully!');
							setProduct({});
							setProducts([result.data, ...products]);
							e.target.image.value = '';
						} else {
							toast.success('SomeThing Want Wrong, Please Try Again later!');
						}
					});
			}
		});
		e.preventDefault();
	};

	return (
		<div>
			<Form onSubmit={(e) => uploadProduct(e)}>
				<Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						required
						type="text"
						name="name"
						value={product.name || ''}
						onChange={(e) => handleAddProduct(e)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPrice">
					<Form.Label>Price</Form.Label>
					<Form.Control
						required
						type="number"
						name="price"
						onChange={(e) => handleAddProduct(e)}
						value={product.price || ''}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicWeight">
					<Form.Label>weight</Form.Label>
					<Form.Control
						required
						value={product.weight || ''}
						type="text"
						name="weight"
						onChange={(e) => handleAddProduct(e)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicWeight">
					<Form.Label>Image</Form.Label>
					<Form.Control
						required
						type="file"
						name="image"
						onChange={(e) => handleAddProduct(e)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Upload
				</Button>
			</Form>
		</div>
	);
}

export default AddProduct;
