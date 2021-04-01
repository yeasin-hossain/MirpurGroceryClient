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

	const getDate = () => {
		return date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4);
	};

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
				<td className="align-middle" data-label="Email">
					{userEmail}
				</td>
				<td className="align-middle" data-label="Order Date">
					{getDate()}
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
