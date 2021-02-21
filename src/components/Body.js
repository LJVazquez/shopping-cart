import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';

export default function Body({ productData, addToCart, loading }) {
	return (
		<Grid container spacing={1}>
			{productData.map((product) => (
				<Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
					<Product product={product} addToCart={addToCart} />
				</Grid>
			))}
		</Grid>
	);
}
