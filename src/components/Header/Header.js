import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../productContext/ProductContext';

function Header() {
	const { user } = useContext(ProductContext);
	return (
		<div className="sticky-top">
			<nav className="navbar navbar-expand-lg navbar-light Header">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<h1>Mirpur Grocery Needs</h1>
					</Link>

					<div
						className=" navbar-collapse justify-content-end"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav  me-auto mb-2 mb-lg-0">
							<li className="nav-item mx-3">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item mx-3">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/order"
								>
									Order
								</Link>
							</li>
							<li className="nav-item mx-3">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/admin/manage"
								>
									Admin
								</Link>
							</li>
							{user.isLoggedIn ? (
								<>
									<li className="nav-item">
										<button className="btn btn-primary">{user.name}</button>
									</li>
									<li className="nav-item mx-3">
										<img
											className="rounded-circle"
											style={{ width: '50px' }}
											src={user.image}
											alt=""
										/>
									</li>
								</>
							) : (
								<li className="nav-item">
									<Link
										className="btn btn-primary"
										aria-current="page"
										to="/login"
									>
										Join
									</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
