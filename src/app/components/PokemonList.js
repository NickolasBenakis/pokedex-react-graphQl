import React, { Fragment } from 'react';
import Pokemon from './Pokemon';
import { List } from 'antd';

const PokemonList = ({ list }) => {
	return (
		<Fragment>
			<List
				style={{ margin: '4rem auto' }}
				itemLayout='vertical'
				dataSource={list}
				renderItem={item => <Pokemon key={item.id} {...item} />}
			/>
		</Fragment>
	);
};

export default PokemonList;
