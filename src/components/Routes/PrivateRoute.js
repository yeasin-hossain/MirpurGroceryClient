import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { ProductContext } from '../productContext/ProductContext';

function PrivateRoute({ children, ...rest }) {
	const { user } = useContext(ProductContext);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.isLoggedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
