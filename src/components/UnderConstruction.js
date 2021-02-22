import React from 'react';
import under from '../img/under-construction.png';
import { CardMedia } from '@material-ui/core';

export default function UnderConstruction() {
	return <CardMedia src={under} component="img" title="under construction" />;
}
