import React from 'react';
import { Link, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import ManageProducts from './ManageProducts';

function Admin() {
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
				</div>
			</div>
		</div>
	);
}

export default Admin;
