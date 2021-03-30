import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import PrivateRoute from './components/Routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
function App() {
	return (
		<div className="container">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute path="/order">
						<Order />
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
