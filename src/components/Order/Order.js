import React from 'react';

function Order(props) {
	const {
		productName,
		quantity,
		weight,
		productPrice,
		totalPrice,
		userEmail,
		date,
		status,
	} = props.order;

	return (
		<>
			<tr>
				<td className="align-middle" data-label="Name">
					{productName}
				</td>
				<td className="align-middle" data-label="Price">
					${productPrice}
				</td>
				<td className="align-middle" data-label="Total Price">
					${totalPrice}
				</td>
				<td className="align-middle" data-label="Quantity">
					{quantity}
				</td>
				<td className="align-middle" data-label="Weight">
					{weight}
				</td>
				<td className="align-middle" data-label="Email">
					{userEmail}
				</td>
				<td className="align-middle" data-label="Order Date">
					{date}
				</td>
				<td className="align-middle" data-label="Status">
					{status}
				</td>
				<td className="align-middle" data-label="Action">
					{props.children}
				</td>
			</tr>
		</>
	);
}

export default Order;
