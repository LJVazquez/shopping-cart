import React from 'react';

export default function Cart({
	cartItems,
	addToCart,
	removeProductFromCart,
	totalPrice,
}) {
	return (
		<aside className="cart">
			<h2>Carrito </h2>
			{cartItems.length === 0 && <p>Carrito vacio</p>}
			<ul>
				{cartItems.map((product) => (
					<li key={product.id}>
						<button onClick={() => removeProductFromCart(product)}>-</button>
						{product.title.slice(0, 10)} x {product.quantity} = $
						{product.quantity * product.price}
						<button onClick={() => addToCart(product)}>+</button>
					</li>
				))}
			</ul>
			<hr />
			<div>
				<h3>Total: ${totalPrice}</h3>
			</div>
		</aside>
	);
}
