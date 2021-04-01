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
				<td data-label="Name">{productName}</td>
				<td data-label="Price">${productPrice}</td>
				<td data-label="Total Price">${totalPrice}</td>
				<td data-label="Quantity">{quantity}</td>
				<td data-label="Email">{userEmail}</td>
				<td data-label="Order Date">{date}</td>
				<td data-label="Status">{status}</td>
				<td data-label="Action">{props.children}</td>
			</tr>
		</>
	);
}

export default Order;
