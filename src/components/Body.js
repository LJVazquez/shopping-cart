import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Product from './Product';

export default function Body({ productData, addToCart }) {
	return (
		<Container
			maxWidth="lg"
			style={{ backgroundColor: '#292929', marginTop: '1em', padding: '1em' }}
		>
			<Grid container spacing={1}>
				{productData.map((product) => (
					<Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
						<Product product={product} addToCart={addToCart} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
