import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { joinGoogle, firebaseInit } from '../firebase/firebaseAuth';
import { ProductContext } from '../productContext/ProductContext';
function Join() {
	const { setUser } = useContext(ProductContext);
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };
	const joinWithGoogle = () => {
		firebaseInit();
		joinGoogle()
			.then((result) => {
				setUser(result);
				history.replace(from);
			})
			.catch((err) => toast.danger('SomeThing Want Wrong, Please Try Again'));
	};
	return (
		<div>
			<button onClick={joinWithGoogle}>Join</button>
		</div>
	);
}

export default Join;
