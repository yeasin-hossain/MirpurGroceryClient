import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light ">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<h1>Mirpur Grocery Needs</h1>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className=" navbar-collapse justify-content-end"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav  me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/order"
								>
									Order
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/admin/manage"
								>
									Admin
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;