import React from 'react';
import { Snackbar } from '@material-ui/core';

export default function Alert({ handleClose, open, title }) {
	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			open={open}
			autoHideDuration={2000}
			onClose={handleClose}
			message={`${title} added to cart.`}
		/>
	);
}
