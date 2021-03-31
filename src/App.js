import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AllOrders from './components/Order/AllOrders';
import PrivateRoute from './components/Routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Checkout from './components/Order/Checkout';
import Join from './components/auth/Join';
function App() {
	return (
		<div className="container">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Join />
					</Route>
					<PrivateRoute path="/order">
						<AllOrders />
					</PrivateRoute>
					<PrivateRoute path="/checkout/:id">
						<Checkout />
					</PrivateRoute>
					<PrivateRoute path="/admin">
						<Admin />
					</PrivateRoute>
				</Switch>
			</Router>
			<ToastContainer />
		</div>
	);
}

export default App;
