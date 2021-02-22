import React from 'react';
import { IconButton, CardMedia, Grid, Typography } from '@material-ui/core';
import rarityColors from './rarityColors';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CartItem({
	item,
	removeProductFromCart,
	addToCart,
	deleteProductFromCart,
}) {
	return (
		<>
			<Grid
				item
				container
				direction="row"
				style={{
					backgroundColor: '#363636',
					color: '#FFF',
					border: `1px solid ${rarityColors[item.rarity]}`,
				}}
			>
				<Grid item xs={4}>
					<CardMedia
						image={item.image}
						component="img"
						title={`{item.title} picture`}
						style={{
							background:
								' radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
							backgroundColor: rarityColors[item.rarity],
						}}
					/>
				</Grid>
				<Grid item xs={8} style={{ textAlign: 'left', padding: '1em' }}>
					<Typography variant="h6">{item.title}</Typography>
					<Typography variant="h6">{item.rarity}</Typography>
					<Typography>ID: {item.id}</Typography>
					<Typography>${item.price}</Typography>
				</Grid>
			</Grid>
			<Grid item container direction="row">
				<Grid
					item
					xs={4}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<IconButton
						style={{ color: '#FFF' }}
						onClick={() => removeProductFromCart(item)}
					>
						-
					</IconButton>
					{item.quantity}
					<IconButton style={{ color: '#FFF' }} onClick={() => addToCart(item)}>
						+
					</IconButton>
				</Grid>
				<Grid item xs={8} style={{ textAlign: 'right' }}>
					<IconButton
						style={{ color: '#FFF' }}
						onClick={() => deleteProductFromCart(item)}
					>
						<DeleteIcon />
					</IconButton>
				</Grid>
			</Grid>
		</>
	);
}
