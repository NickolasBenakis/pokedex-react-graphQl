import React, { Fragment } from 'react';
import Pokemon from './Pokemon';
import { List } from 'antd';

const PokemonList = ({ list }) => {
	return (
		<Fragment>
			<List
				itemLayout='vertical'
				dataSource={list}
				renderItem={item => (
					<List.Item>
						<Pokemon key={item.id} {...item} />
					</List.Item>
				)}
			/>
		</Fragment>
	);
};

export default PokemonList;
