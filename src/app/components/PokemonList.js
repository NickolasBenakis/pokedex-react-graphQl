import React, { Fragment } from 'react';
import Pokemon from './Pokemon';
import { List, Avatar } from 'antd';

const PokemonList = ({ list }) => {
	return (
		<Fragment>
			<List
				itemLayout='vertical'
				dataSource={list}
				renderItem={item => (
					<List.Item>
						{/* <List.Item.Meta
							key={item.id}
							avatar={<Avatar src={item.image} alt='pokemon_image' />}
							title={item.name}
						/> */}
						<Pokemon key={item.id} {...item} />
					</List.Item>
				)}
			/>
		</Fragment>
	);
};

export default PokemonList;
