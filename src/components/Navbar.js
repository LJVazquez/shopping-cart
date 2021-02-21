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
import { Link } from 'react-router-dom';

export default function Navbar({ totalItemsInCart }) {
	return (
		<AppBar position="static" style={{ backgroundColor: '#EACA68' }}>
			<Container maxWidth="lg">
				<Toolbar style={{ justifyContent: 'space-between' }}>
					<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Typography variant="h6">ShopNite</Typography>
					</Link>
					<Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
						<Button color="inherit">
							<Badge badgeContent={totalItemsInCart} color="secondary">
								<ShoppingCartIcon />
							</Badge>
						</Button>
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
