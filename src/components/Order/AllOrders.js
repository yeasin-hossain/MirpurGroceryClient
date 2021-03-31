import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../productContext/ProductContext';
import Order from './Order';

function AllOrders() {
	const [allOrder, setAllOrder] = useState([]);
	const { user } = useContext(ProductContext);
	useEffect(() => {
		axios
			.get(`https://phassignment10.herokuapp.com/order/userorder/${user.uuid}`)
			.then((res) => setAllOrder(res.data))
			.catch((err) => console.log(err));
	}, [user]);
	const removeOrder = () => {
		console.log('call from order');
	};
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Total Price</th>
						<th>Quantity</th>
						<th>Email</th>
						<th>Date</th>
						<th>Status</th>
						<th>ACtion</th>
					</tr>
				</thead>
				<tbody>
					{allOrder.map((order, index) => (
						<Order key={index} order={order}>
							<button onClick={removeOrder}>Remove</button>
						</Order>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default AllOrders;
