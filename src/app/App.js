import React, { Fragment, useLayoutEffect } from 'react';
import '../theme/App.scss';
import PokemonList from './components/PokemonList.js';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Error from './components/Error';
import Spinner from './components/Spinner';
import SearchInput from './components/SearchInput';

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

	useLayoutEffect(() => {
		const handleScroll = e => {
			let pos =
				(document.documentElement.scrollTop || document.body.scrollTop) +
				document.documentElement.offsetHeight;
			let max = document.documentElement.scrollHeight;

			// it used to be pos === max
			if (pos > max - 800) {
				pokemons.fetchMore({
					variables: {
						size: (pokemons.data && pokemons.data.pokemons.length + 10) || 10
					},
					updateQuery: (prev, { fetchMoreResult }) => {
						if (!fetchMoreResult) return prev;
						return { ...prev, pokemons: [...fetchMoreResult.pokemons] };
					}
				});
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<Fragment>
			<main className='App'>
				<header className='fixed-header'>
					<SearchInput />
				</header>
				{pokemons.loading ? (
					<Spinner />
				) : pokemons.error ? (
					<Error description={pokemons.error} />
				) : (
					<PokemonList list={pokemons.data.pokemons || []} />
				)}
			</main>
		</Fragment>
	);
}

export default App;
