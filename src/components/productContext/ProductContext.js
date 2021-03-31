import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();
export const ProductProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [user, setUser] = useState({});

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
	const allContexts = {
		products,
		setProducts,
		user,
		setUser,
	};
	return (
		<ProductContext.Provider value={allContexts}>
			{props.children}
		</ProductContext.Provider>
	);
};
