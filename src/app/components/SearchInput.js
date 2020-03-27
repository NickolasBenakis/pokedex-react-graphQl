import React, { Fragment, useState, useCallback } from 'react';
import { Input, Row } from 'antd';
import { GET_POKEMON, GET_POKEMONS } from '../../graphQl/queries';
import { useLazyQuery, useApolloClient } from '@apollo/react-hooks';
import { debounce } from 'lodash';

const SearchInput = () => {
	const debounceCallback = useCallback(
		debounce(value => {
			getPokemon({
				variables: { name: value }
			});
		}, 300),
		[]
	);

	const [getPokemon, pokemonData] = useLazyQuery(GET_POKEMON);
	const client = useApolloClient();

	const handleOnChange = e => {
		e.persist();
		debounceCallback(e.currentTarget.value.toLowerCase());
	};
	if (pokemonData.called && !pokemonData.loading) {
		//		console.log(pokemonData, pokemonData.data);
		// pokemonData.updateQuery((prev, variables) => {
		// 	console.log(prev, variables);
		// });
		
		client.writeData({ data: pokemonData.data });

		console.log(pokemonData.data.pokemon);
	}
	return (
		<Fragment>
			<Row
				justify='center'
				align='middle'
				style={{ width: '20rem', margin: '20px auto' }}>
				<Input
					placeholder='Find pokemon...'
					allowClear
					onChange={handleOnChange}
					size='large'
				/>
			</Row>
		</Fragment>
	);
};

export default React.memo(SearchInput);
