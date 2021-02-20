import React, { useState, useEffect } from 'react';
import './App.css';
import Body from './components/Body';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
	const [productData, setProductData] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItemsInCart, setTotalItemsInCart] = useState(0);

	function addToCart(product) {
		//does product exists on the cart already?
		const productMatch = cartItems.some((elem) => elem.id === product.id);
		productMatch ? productDidMatch(product) : productDidntMatch(product);

		setTotalPrice(
			(prevState) => Math.round((prevState + product.price) * 100) / 100
		);
		setTotalItemsInCart((prevState) => prevState + 1);
	}

	function productDidMatch(product) {
		setCartItems((prevState) =>
			prevState.map((elem) =>
				elem.id === product.id ? { ...elem, quantity: elem.quantity + 1 } : elem
			)
		);
	}

	function productDidntMatch(product) {
		setCartItems((prevState) => [...prevState, { ...product, quantity: 1 }]);
	}

	function removeProductFromCart(product) {
		if (product.quantity === 1) {
			setCartItems((prevState) =>
				prevState.filter((elem) => elem.id !== product.id)
			);
		} else {
			setCartItems((prevState) =>
				prevState.map((elem) =>
					elem.id === product.id
						? { ...elem, quantity: elem.quantity - 1 }
						: elem
				)
			);
		}

		setTotalPrice(
			(prevState) => Math.round((prevState - product.price) * 100) / 100
		);
		setTotalItemsInCart((prevState) => prevState - 1);
	}

	useEffect(() => {
		fetch('https://api.jsonbin.io/b/602f1acabd6b755d01997850')
			.then((res) => res.json())
			.then((data) => setProductData(data));
	}, []);

	return (
		<div className="App">
			<Header totalItemsInCart={totalItemsInCart} />
			<div className="container">
				<Body productData={productData} addToCart={addToCart} />
				<Cart
					cartItems={cartItems}
					addToCart={addToCart}
					totalPrice={totalPrice}
					removeProductFromCart={removeProductFromCart}
				/>
			</div>
		</div>
	);
}

export default App;
