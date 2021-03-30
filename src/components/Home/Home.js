import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';

function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const getProducts = await fetch(
				`https://phassignment10.herokuapp.com/product`
			);
			const getJsonProducts = await getProducts.json();
			setProducts(getJsonProducts);
		};
		fetchProducts();
	}, []);
	return (
		<div className="d-flex flex-wrap">
			{products.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	);
}

export default Home;
