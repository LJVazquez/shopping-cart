import React from 'react';
import { Grid } from '@material-ui/core';
import ItemCard from './ItemCard';
import Spinner from './Spinner';

export default function Body({ productData, addToCart }) {
	return (
		<Grid container spacing={1}>
			{productData.length === 0 ? (
				<Spinner />
			) : (
				productData.map((product) => (
					<Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
						<ItemCard product={product} addToCart={addToCart} />
					</Grid>
				))
			)}
		</Grid>
	);
}
