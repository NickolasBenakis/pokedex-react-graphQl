import React, { Fragment } from 'react';
import Pokemon from './Pokemon';
import { List } from 'antd';

const PokemonList = ({ list }) => {
	return (
		<Fragment>
			<List
				itemLayout='vertical'
				dataSource={list}
				renderItem={item => <Pokemon key={item.id} {...item} />}
			/>
		</Fragment>
	);
};

export default PokemonList;
