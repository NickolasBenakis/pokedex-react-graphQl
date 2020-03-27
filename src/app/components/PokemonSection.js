import React, { Fragment, useLayoutEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../../graphQl/queries';
import Error from './Error';
import Spinner from './Spinner';
import PokemonList from './PokemonList';
const PokemonSection = () => {
	const pokemons = useQuery(GET_POKEMONS, { variables: { size: 10 } });

	useLayoutEffect(() => {
		console.log('App component');
		const handleScroll = e => {
			let pos =
				(document.documentElement.scrollTop || document.body.scrollTop) +
				document.documentElement.offsetHeight;
			let max = document.documentElement.scrollHeight;

			// it used to be pos === max
			if (pos > max - 800) {
				console.log('Fetch more pokemons');
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
			{pokemons.loading ? (
				<Spinner />
			) : pokemons.error ? (
				<Error description={pokemons.error} />
			) : (
				<PokemonList list={pokemons.data.pokemons || []} />
			)}
		</Fragment>
	);
};

export default React.memo(PokemonSection);
