import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProductContext } from '../productContext/ProductContext';
import Title from '../Title/Title';
import moment from 'moment';

function Checkout() {
	const [product, setProduct] = useState({});
	const { name, price, weight, image, _id } = product;
	const { user } = useContext(ProductContext);
	const { email, uuid } = user;
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		axios(
			`https://phassignment10.herokuapp.com/product/singleproduct/${id}`
		).then((res) => res.status === 200 && setProduct(res.data));
	}, [id]);

	// Checkout Function
	const checkoutNow = () => {
		const orderInfo = {
			userId: uuid,
			userEmail: email,
			productId: _id,
			productName: name,
			productPrice: price,
			totalPrice: 1 * price,
			quantity: 1,
			weight: weight,
			date: moment().format('MMMM Do YYYY, h:mm:ss'),
		};
		axios
			.post(`https://phassignment10.herokuapp.com/order`, orderInfo)
			.then((res) => {
				if (res.status === 200) {
					toast.success('Your Order We Receive Successfully! Lets Shop More ');
					history.push('/');
				}
			});
	};
	return (
		<div>
			<Title title={name} image={image} />
			<table className="table mt-5">
				<thead>
					<tr>
						<th>Image</th>
						<th>Description</th>
						<th>Quantity</th>
						<th>Weight</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label="Image">
							<img
								src={image}
								style={{ width: '75px', height: '75px' }}
								alt=""
							/>
						</td>
						<td data-label="Name">
							<h3>{name}</h3>
						</td>
						<td data-label="Quantity">
							<h3>{name && 1}</h3>
						</td>
						<td data-label="Weight">
							<h3>{weight}</h3>
						</td>
						<td data-label="Price">
							<h3>৳{price}</h3>
						</td>
					</tr>
					<tr>
						<td colSpan="4">
							<h1>Total</h1>
						</td>
						<td>
							<h1>৳{price}</h1>
						</td>
					</tr>
					<tr>
						{/* <td></td>
						<td></td>
						<td></td>
						<td></td> */}
						<td colspan="5" style={{ textAlign: 'right' }}>
							<button className="btn btn-primary" onClick={checkoutNow}>
								Checkout
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Checkout;
