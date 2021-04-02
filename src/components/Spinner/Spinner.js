import React from 'react';
import Loader from 'react-loader-spinner';
export default function Spinner() {
	const spinnerStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
	};
	return (
		<div className="" style={spinnerStyle}>
			<Loader
				type="Watch"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={9000} //1 min
			/>
		</div>
	);
}
