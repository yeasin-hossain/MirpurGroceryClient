import React from 'react';
import { Card } from 'react-bootstrap';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
function Product({ product }) {
	const { name, price, weight, image, _id } = product;
	return (
		<div className="m-3">
			<Card
				style={{ width: '18rem' }}
				className="border-0 shadow-sm productCard mainCard rounded"
			>
				<Card.Img variant="top" src={image} style={{ height: '250px' }} />
				<Card.Body className="d-flex flex-column justify-content-between">
					<Card.Text>{name}</Card.Text>
					<Card.Text>{weight}</Card.Text>
					<div className="d-flex justify-content-between mt-4">
						<Card.Text>${price}</Card.Text>
						<Link className="btn btn-primary" to={`/checkout/${_id}`}>
							Buy Now <GiShoppingCart className="text-light mx-1" />
						</Link>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Product;
