import React from 'react';
import { CgRemove } from 'react-icons/cg';
function Product({ product, deleteProduct }) {
	const { image, name, price, weight, _id } = product;
	return (
		<>
			<tr>
				<td data-label="Image">
					<img
						style={{ width: '70px', height: '70px' }}
						className="rounded"
						src={image}
						alt=""
					/>
				</td>
				<td data-label="Name" className="p-1 align-middle">
					{name}
				</td>
				<td data-label="Price" className="p-1 align-middle">
					৳{price}
				</td>
				<td data-label="Weight" className="p-1 align-middle">
					{weight}
				</td>
				<td data-label="Action" className="p-1 align-middle">
					<button className="btn btn-danger" onClick={() => deleteProduct(_id)}>
						Delete <CgRemove />
					</button>
				</td>
			</tr>
		</>
	);
}

export default Product;
