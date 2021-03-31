import React from 'react';

function Order(props) {
	const {
		productName,
		quantity,
		productPrice,
		totalPrice,
		userEmail,
		date,
		status,
	} = props.order;
	return (
		<>
			<tr>
				<td>{productName}</td>
				<td>{productPrice}</td>
				<td>{totalPrice}</td>
				<td>{quantity}</td>
				<td>{userEmail}</td>
				<td>{date}</td>
				<td>{status}</td>
				<td>{props.children}</td>
			</tr>
		</>
	);
}

export default Order;
