import React, { Fragment } from 'react';
import { Card } from 'antd';
import { preFetch } from '../utils/preFetch';
const Pokemon = ({ image, name }) => {
	return (
		<Fragment>
			<li style={{ padding: '1.5rem' }}>
				<Card
					title={<code style={{ fontWeight: 'bold' }}>{name}</code>}
					draggable='true'
					bordered={false}
					className='pokemon-card'>
					<img
						src={preFetch(image)}
						alt='pokemon_image'
						className='pokemon-image'
					/>
				</Card>
			</li>
		</Fragment>
	);
};

export default Pokemon;
