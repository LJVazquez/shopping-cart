import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Cart from './components/Cart';
import Details from './components/Details';
import Header from './components/Header';
import Navbar from './components/Navbar';

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
			deleteProductFromCart(product);
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

	function deleteProductFromCart(product) {
		setCartItems((prevState) =>
			prevState.filter((elem) => elem.id !== product.id)
		);
	}

	useEffect(() => {
		fetch('https://api.jsonbin.io/b/602f1acabd6b755d01997850/2')
			.then((res) => res.json())
			.then((data) => setProductData(data));
	}, []);

	useEffect(() => {
		setTotalItemsInCart(
			cartItems.reduce((acc, elem) => acc + elem.quantity, 0)
		);
	}, [cartItems]);

	return (
		<Router>
			<Switch>
				<div className="App">
					<Navbar totalItemsInCart={totalItemsInCart} />
					<Container
						maxWidth="lg"
						style={{
							backgroundColor: '#292929',
							marginTop: '1em',
							padding: '1em',
						}}
					>
						<Route
							exact
							path="/"
							render={() => (
								<Body productData={productData} addToCart={addToCart} />
							)}
						/>
						<Route
							path="/item/:id"
							render={(props) => <Details {...props} addToCart={addToCart} />}
						/>
						<Route
							path="/cart"
							render={(props) => (
								<Cart
									{...props}
									cartItems={cartItems}
									addToCart={addToCart}
									totalPrice={totalPrice}
									removeProductFromCart={removeProductFromCart}
									deleteProductFromCart={deleteProductFromCart}
								/>
							)}
						/>
					</Container>
				</div>
			</Switch>
		</Router>
	);
}

export default App;
