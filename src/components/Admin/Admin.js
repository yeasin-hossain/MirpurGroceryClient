import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Order from '../Order/Order';
import Spinner from '../Spinner/Spinner';
import AddProduct from './AddProduct';
import ManageProducts from './ManageProducts';

function Admin() {
	const [allOrder, setAllOrder] = useState([]);
	useEffect(() => {
		axios
			.get(`https://phassignment10.herokuapp.com/order/allorder`)
			.then((res) => setAllOrder(res.data))
			.catch((err) => console.log(err));
	}, []);
	const confirmOrder = () => {
		console.log('Click from admin');
	};
	return (
		<div>
			<div className="row gutter-3">
				<div className="col-md-3 border p-2">
					<div className="menu d-flex flex-column ">
						<Link className="btn btn-primary m-3" to="/admin/manage">
							Manage Product
						</Link>
						<Link className="btn btn-primary m-3" to="/admin/addproduct">
							Add Product
						</Link>
						<Link className="btn btn-primary m-3" to="/admin/updateproduct">
							Edit Product
						</Link>
						<Link className="btn btn-primary m-3" to="/admin/manageorder">
							Manage Order
						</Link>
					</div>
				</div>
				<div className="col-md-9 border">
					<Route path="/admin/manage">
						<ManageProducts />
					</Route>
					<Route path="/admin/addproduct">
						<AddProduct />
					</Route>
					<Route path="/admin/updateproduct">
						<h1>Update</h1>
					</Route>
					<Route path="/admin/manageorder">
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
								{allOrder.length === 0 && <Spinner />}
								{allOrder.map((order, index) => (
									<Order key={index} order={order}>
										<button onClick={confirmOrder}>Confirm</button>
									</Order>
								))}
							</tbody>
						</table>
					</Route>
				</div>
			</div>
		</div>
	);
}

export default Admin;
