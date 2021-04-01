import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import Order from '../Order/Order';
import Spinner from '../Spinner/Spinner';
import AddProduct from './AddProduct';
import ManageProducts from './ManageProducts';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { RiEdit2Fill } from 'react-icons/ri';
import { AiOutlineFormatPainter } from 'react-icons/ai';
function Admin() {
	const [allOrder, setAllOrder] = useState([]);
	useEffect(() => {
		axios
			.get(`https://phassignment10.herokuapp.com/order/allorder`)
			.then((res) => setAllOrder(res.data))
			.catch((err) => console.log(err));
	}, []);
	const confirmOrder = (id) => {
		axios
			.get(`https://phassignment10.herokuapp.com/order/updateorder/${id}`)
			.then((res) => {
				if (res.status === 200) {
					const filterUpdateOrder = allOrder.map((order) => {
						if (order._id === id) {
							order.status = 'confirm';
						}
						return order;
					});
					setAllOrder(filterUpdateOrder);
					toast.success('Order Confirm successfully');
				}
			})
			.catch((err) => console.log(err));
	};

	const removeOrder = (id) => {
		axios
			.get(`https://phassignment10.herokuapp.com/order/deleteorder/${id}`)
			.then((res) => {
				if (res.status === 200) {
					const filterDeleteOrder = allOrder.filter(
						(order) => order._id !== id
					);
					setAllOrder(filterDeleteOrder);
					toast.success('Order delete successfully');
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div className="row gutter-3">
				<div className="col-md-3 border p-2">
					<div className="menu d-flex flex-column adminDash">
						<Link className="btn btn-primary m-3" to="/admin/manage">
							Manage Product <AiOutlineFormatPainter className="mx-3" />
						</Link>
						<Link className="btn btn-primary m-3" to="/admin/addproduct">
							Add Product <BiMessageSquareAdd className="mx-3" />
						</Link>
						<Link className="btn btn-primary m-3" to="/admin/updateproduct">
							Edit Product <RiEdit2Fill className="mx-3" />
						</Link>
						<Link className="btn btn-primary m-3" to="/admin/manageorder">
							Manage Order <AiOutlineFormatPainter className="mx-3" />
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
										{/* Confirm Order */}
										{order.status === 'confirm' ? (
											<button
												className="btn btn-danger my-1"
												onClick={() => removeOrder(order._id)}
											>
												Delete
											</button>
										) : (
											<>
												<button
													className="btn btn-primary"
													onClick={() => confirmOrder(order._id)}
												>
													Confirm
												</button>
												<button
													className="btn btn-danger my-1"
													onClick={() => removeOrder(order._id)}
												>
													Delete
												</button>
											</>
										)}
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
