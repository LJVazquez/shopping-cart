import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Badge,
	Container,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Navbar({ totalItemsInCart }) {
	return (
		<AppBar position="static" style={{ backgroundColor: '#EACA68' }}>
			<Container maxWidth="lg">
				<Toolbar style={{ justifyContent: 'space-between' }}>
					<Typography variant="h6">ShopNite</Typography>
					<Button color="inherit">
						<Badge badgeContent={totalItemsInCart} color="secondary">
							<ShoppingCartIcon />
						</Badge>
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
