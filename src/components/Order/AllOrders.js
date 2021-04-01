import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ProductContext } from '../productContext/ProductContext';
import Spinner from '../Spinner/Spinner';
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
	const removeOrder = (id) => {
		axios
			.get(`https://phassignment10.herokuapp.com/order/deleteorder/${id}`)
			.then((res) => {
				if (res.status === 200) {
					const filterDeleteOrder = allOrder.filter(
						(order) => order._id !== id
					);
					setAllOrder(filterDeleteOrder);
					toast.success('Order deleted successfully');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			{allOrder.length === 0 && <Spinner />}
			{allOrder.length === 0 ? (
				<h1 className="text-center mt-5">You Not Yet Order Anything</h1>
			) : (
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Total Price</th>
							<th>Quantity</th>
							<th>Weight</th>
							<th>Email</th>
							<th>Date</th>
							<th>Status</th>
							<th>ACtion</th>
						</tr>
					</thead>
					<tbody>
						{allOrder.map((order, index) => (
							<Order key={index} order={order}>
								{/* Only Pending Order can delete */}
								{order.status === 'pending' ? (
									<button
										className="btn btn-danger"
										onClick={() => removeOrder(order._id)}
									>
										Remove
									</button>
								) : (
									<button disabled className="btn btn-danger">
										Remove
									</button>
								)}
							</Order>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default AllOrders;
