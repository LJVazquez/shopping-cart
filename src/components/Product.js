import React from 'react';
import Card from '@material-ui/core/Card';
import {
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	Zoom,
} from '@material-ui/core/';
import StarRateIcon from '@material-ui/icons/StarRate';
import rarityColors from './rarityColors';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	card: {
		borderRadius: 0,
		'&:hover': {
			transform: 'scale(1.05)',
			transition: 'all 200ms',
		},
	},
	content: {
		position: 'relative',
		padding: 0,
		marginTop: -64,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		color: '#FFF',
	},
	actions: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-around',
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
		color: '#FFF',
	},
});

export default function Product({ product, addToCart }) {
	const { image, price, title, rarity, rank } = product;
	const classes = useStyles();

	return (
		<Card
			variant="outlined"
			className={classes.card}
			style={{ border: `5px solid ${rarityColors[rarity]}` }}
		>
			<CardActionArea>
				<CardMedia
					image={image}
					component="img"
					title={`${title} picture`}
					style={{
						background:
							' radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
						backgroundColor: rarityColors[rarity],
					}}
				/>
				<CardContent className={classes.content}>
					<Typography>{title}</Typography>
				</CardContent>
				<CardActions className={classes.actions}>
					<div style={{ display: 'flex' }}>
						<MonetizationOnIcon />
						<Typography>{price}</Typography>
					</div>
					<div style={{ display: 'flex' }}>
						<StarRateIcon />
						<Typography>{rank}</Typography>
					</div>
					{/* <button onClick={() => addToCart(product)}>Agregar</button> */}
				</CardActions>
			</CardActionArea>
		</Card>
	);
}
