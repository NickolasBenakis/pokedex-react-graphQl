import React, { Fragment } from 'react';
import '../theme/App.scss';
import PokemonList from './components/PokemonList.js';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
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
	console.log(pokemons);
	if (pokemons.loading) {
		return <div>Loading...</div>;
	}
	if (pokemons.error) {
		return <div>Error...</div>;
	}

	return (
		<Fragment>
			<main className='App'>
				<PokemonList list={pokemons.data.pokemons} />
			</main>
		</Fragment>
	);
}

export default App;
