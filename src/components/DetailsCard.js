import React, { useState, useEffect } from 'react';
import {
	Button,
	CardMedia,
	Container,
	Grid,
	Typography,
	LinearProgress,
	Snackbar,
} from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import rarityColors from './rarityColors';
import spinner from '../img/spinner.gif';
import Alert from './Alert';

export default function Details(props) {
	const matchID = props.match.params.id;
	const { addToCart } = props;
	const [itemData, setItemData] = useState({});
	const { title, price, rank, rarity, image } = itemData;
	const [open, setOpen] = useState(false);

	useEffect(() => {
		fetch('https://api.jsonbin.io/b/602f1acabd6b755d01997850/2')
			.then((res) => res.json())
			.then((data) => {
				setItemData(data.find((elem) => elem.id === parseInt(matchID)));
			});
	}, []);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<Container maxWidth="md">
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
						src={image ? image : spinner}
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
							<Typography variant="h6">{title ? title : 'Loading'}</Typography>
							<Typography variant="subtitle1">{rarity} </Typography>
						</Grid>
						<Grid item style={{ display: 'flex' }}>
							<Typography variant="subtitle1">{rank}</Typography>
							<StarRateIcon />
						</Grid>
					</Grid>
					<Grid
						item
						container
						xs={12}
						direction="column"
						justify="space-between"
					>
						<Grid item style={{ padding: '0 1em' }}>
							{title ? (
								<Typography variant="caption">
									This town ain't big enough... Reactive: Transforms by dealing
									damage, or by outliving other players.
								</Typography>
							) : (
								<LinearProgress />
							)}
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
								{title ? (
									<Button
										variant="text"
										style={{ color: '#FFF' }}
										onClick={() => {
											addToCart(itemData);
											handleClick();
										}}
									>
										Add to cart
									</Button>
								) : (
									''
								)}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Alert open={open} handleClose={handleClose} title={title} />
		</Container>
	);
}
