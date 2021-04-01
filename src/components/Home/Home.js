import React, { useContext } from 'react';
import { ProductContext } from '../productContext/ProductContext';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import Product from './Product';

function Home() {
	const { products } = useContext(ProductContext);
	return (
		<div className="d-flex flex-wrap justify-content-center">
			<Title />
			{products.length === 0 && <Spinner />}
			{products.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	);
}

export default Home;
