import React, { useState, useEffect } from 'react';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import rarityColors from './rarityColors';

export default function Details(props) {
	const matchID = props.match.params.id;
	const { addToCart } = props;
	const [itemData, setItemData] = useState({});
	const { id, title, price, rank, rarity, image } = itemData;

	useEffect(() => {
		fetch('https://api.jsonbin.io/b/602f1acabd6b755d01997850/2')
			.then((res) => res.json())
			.then((data) => {
				setItemData(data.find((elem) => elem.id === parseInt(matchID)));
			});
	}, []);

	return (
		<Grid
			container
			direction="row"
			style={{
				backgroundColor: '#363636',
				color: '#FFF',
				border: `1px solid ${rarityColors[rarity]}`,
			}}
		>
			<Grid item xs={12} sm={4}>
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
			</Grid>
			<Grid item container xs={12} sm={8}>
				<Grid
					item
					container
					xs={12}
					justify="space-between"
					style={{ backgroundColor: '#121212', padding: '1em' }}
				>
					<Grid item style={{ textAlign: 'left' }}>
						<Typography variant="h6">{title}</Typography>
						<Typography variant="subtitle1">{rarity} </Typography>
					</Grid>
					<Grid item style={{ display: 'flex' }}>
						<Typography variant="subtitle1">{rank}</Typography>
						<StarRateIcon />
					</Grid>
				</Grid>
				<Grid item container xs={12} direction="column" justify="space-between">
					<Grid item style={{ padding: '0 1em' }}>
						<Typography variant="caption">
							This town ain't big enough... Reactive: Transforms by dealing
							damage, or by outliving other players.
						</Typography>
					</Grid>
					<Grid
						item
						container
						justify="space-between"
						alignItems="center"
						style={{ padding: '0 1em' }}
					>
						<Grid item>
							<div style={{ display: 'flex' }}>
								<MonetizationOnIcon />
								<Typography>{price}</Typography>
							</div>
						</Grid>
						<Grid item>
							<Button
								variant="text"
								style={{ color: '#FFF' }}
								onClick={() => addToCart(itemData)}
							>
								Add to cart
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
