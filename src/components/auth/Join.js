import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { joinGoogle, firebaseInit } from '../firebase/firebaseAuth';
import { ProductContext } from '../productContext/ProductContext';
import { FcGoogle } from 'react-icons/fc';

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
			<h1 className=" text-center my-5 loginText">Press The Icon To Join</h1>
			<button
				onClick={joinWithGoogle}
				className="btn d-block m-auto   px-5 bg-white loginBtn"
			>
				<FcGoogle style={{ fontSize: '55px' }} />
			</button>
		</div>
	);
}

export default Join;
