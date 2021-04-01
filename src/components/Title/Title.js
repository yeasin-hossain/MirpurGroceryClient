import React from 'react';
import { Helmet } from 'react-helmet';
import titleImg from '../images/grocery-store.svg';

function Title({ title, image }) {
	return (
		<Helmet>
			<title>{title || 'Mirpur Grocery Needs'}</title>
			<link rel="icon" href={image || titleImg} />
		</Helmet>
	);
}

export default Title;
