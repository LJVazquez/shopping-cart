import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function Cart({
	cartItems,
	addToCart,
	removeProductFromCart,
	deleteProductFromCart,
	totalPrice,
}) {
	return (
		<>
			<Container maxWidth="sm">
				<Grid container style={{ color: '#FFF' }}>
					<Grid item xs={12}>
						<Typography variant="h5">Cart</Typography>
					</Grid>
					{cartItems.map((item) => (
						<CartItem
							item={item}
							addToCart={addToCart}
							removeProductFromCart={removeProductFromCart}
							deleteProductFromCart={deleteProductFromCart}
							totalPrice={totalPrice}
						/>
					))}
					<Grid item xs={12}>
						<hr />
					</Grid>
					<Grid item xs={6} style={{ textAlign: 'left' }}>
						<Typography>Total:</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						style={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						<MonetizationOnIcon />
						{totalPrice}
					</Grid>
				</Grid>
				<Grid item>
					<Link to="/under-construction">
						<Button color="primary">Proceed to payment</Button>
					</Link>
				</Grid>
			</Container>
		</>
	);
}
