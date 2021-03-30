import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { GiShoppingCart } from 'react-icons/gi';
function Product({ product, buyProduct }) {
	const { name, price, image } = product;
	return (
		<div className="m-3">
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={image} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<div className="d-flex justify-content-between mt-5">
						<Card.Title>$ {price}</Card.Title>
						<Button variant="primary">
							Buy Now <GiShoppingCart className="text-light mx-1" />
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Product;
