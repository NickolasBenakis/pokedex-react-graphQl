import React, { Fragment } from 'react';

const Pokemon = ({ image, name }) => {
	return (
		<Fragment>
			<h2>{name}</h2>
			<img src={image} alt='pokemon_image' />
		</Fragment>
	);
};

export default Pokemon;
