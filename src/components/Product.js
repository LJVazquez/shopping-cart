import React from 'react';

export default function Product({ product, addToCart }) {
	const { image, price, title } = product;
	return (
		<>
			<h4>{title.slice(0, 10)}</h4>
			<img src={image} height="100px" />
			<h4>${price}</h4>
			<button onClick={() => addToCart(product)}>Agregar</button>
		</>
	);
}
