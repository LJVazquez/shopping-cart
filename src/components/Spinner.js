import React from 'react';
import spinner from '../img/spinner.gif';
import { CardMedia, Container, Typography } from '@material-ui/core';

export default function Spinner() {
	return (
		<Container maxWidth="sm">
			<CardMedia src={spinner} component="img" title="llama spinner" />
			<Typography variant="h4" style={{ color: '#fff' }}>
				Loading...
			</Typography>
		</Container>
	);
}
