import React from 'react';
import { CgRemove } from 'react-icons/cg';
function Product({ product, deleteProduct }) {
	const { image, name, price, weight, _id } = product;
	return (
		<>
			<tr>
				<td>
					<img style={{ width: '100px', height: '100px' }} src={image} alt="" />
				</td>
				<td className="p-1 align-middle">{name}</td>
				<td className="p-1 align-middle">{price}</td>
				<td className="p-1 align-middle">{weight}</td>
				<td className="p-1 align-middle">
					<button className="btn btn-danger" onClick={() => deleteProduct(_id)}>
						Delete <CgRemove />
					</button>
				</td>
			</tr>
		</>
	);
}

export default Product;
