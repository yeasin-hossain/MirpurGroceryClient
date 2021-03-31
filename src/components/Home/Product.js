import React from 'react';
import { Card } from 'react-bootstrap';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
function Product({ product }) {
	const { name, price, image, _id } = product;
	return (
		<div className="m-3">
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={image} style={{ height: '250px' }} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<div className="d-flex justify-content-between mt-5">
						<Card.Title>$ {price}</Card.Title>
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
