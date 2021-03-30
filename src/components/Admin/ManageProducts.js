import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { ProductContext } from '../productContext/ProductContext';
import Product from './Product';

function ManageProducts() {
	const { products, setProducts } = useContext(ProductContext);
	const deleteProduct = (id) => {
		axios(
			`https://phassignment10.herokuapp.com/product/deleteproduct/${id}`
		).then((res) => {
			if (res.status === 200) {
				// also remove data from client by and never call server
				const removedProduct = products.filter((product) => product._id !== id);
				setProducts(removedProduct);
				toast.success('Product Delete Successfully');
			}
		});
	};
	return (
		<div>
			<table className="table table-striped text-center">
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Weight</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<Product
							key={product._id}
							product={product}
							deleteProduct={deleteProduct}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ManageProducts;