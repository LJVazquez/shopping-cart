import React, { useEffect, useState } from 'react';
import Product from './Product';

export default function Body({ productData, addToCart }) {
	return (
		<main className="body">
			<h2>Productos</h2>
			<div className="products-container">
				{productData.map((product) => (
					<div
						key={product.id}
						style={{ border: '1px solid black', padding: 5 }}
					>
						<Product product={product} addToCart={addToCart} />
					</div>
				))}
			</div>
		</main>
	);
}
