import React from 'react';

export default function Header({ totalItemsInCart }) {
	return (
		<header>
			<div className="header">
				<h1>Shopcabra</h1>
				<div className="links">
					<a href="#">Cart {totalItemsInCart}</a>
					<a href="#">Sign in</a>
				</div>
			</div>
		</header>
	);
}
