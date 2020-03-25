import React, { Fragment } from 'react';
import '../theme/App.scss';
import PokemonList from './components/PokemonList.js';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Spin, Row } from 'antd';
const GET_POKEMONS = gql`
	query($size: Int!) {
		pokemons(first: $size) {
			id
			name
			image
			evolutions {
				name
				image
			}
		}
	}
`;
function App() {
	const pokemons = useQuery(GET_POKEMONS, { variables: { size: 10 } });

	return (
		<Fragment>
			<main className='App'>
				{pokemons.loading ? (
					<Row justify='center' align='middle' style={{ height: 'inherit' }}>
						<Spin size='Large' className='' />
					</Row>
				) : pokemons.error ? (
					<div>Error...</div>
				) : (
					<PokemonList list={pokemons.data.pokemons} />
				)}
			</main>
		</Fragment>
	);
}

export default App;
