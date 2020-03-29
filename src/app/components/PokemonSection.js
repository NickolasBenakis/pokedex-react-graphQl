import React, { Fragment, useLayoutEffect, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { GET_POKEMONS, GET_POKEMON } from '../../graphQl/queries';
import Error from './Error';
import Spinner from './Spinner';
import PokemonList from './PokemonList';
import EventEmitter from '../../EventEmitter';

const PokemonSection = () => {
	const allPokemonsQuery = useQuery(GET_POKEMONS, {
		variables: { size: 10 }
	});
	const [fetchPokemon, pokemonData] = useLazyQuery(GET_POKEMON);

	EventEmitter.subscribe('FETCH_POKEMON', pokemonName => {
		fetchPokemon({
			variables: { name: pokemonName }
		});
	});

	useLayoutEffect(() => {
		console.log('App component');
		const handleScroll = e => {
			let pos =
				(document.documentElement.scrollTop || document.body.scrollTop) +
				document.documentElement.offsetHeight;
			let max = document.documentElement.scrollHeight;

			// it used to be pos === max
			if (pos === max) {
				console.log('Fetch more pokemons');
				allPokemonsQuery.fetchMore({
					variables: {
						size:
							(allPokemonsQuery.data &&
								allPokemonsQuery.data.pokemons.length + 10) ||
							10
					},
					updateQuery: (prev, { fetchMoreResult }) => {
						console.log(prev);
						if (!fetchMoreResult) return prev;
						return { ...prev, pokemons: [...fetchMoreResult.pokemons] };
					}
				});
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	if (pokemonData && pokemonData.data && pokemonData.data.pokemon) {
		return <PokemonList list={[pokemonData.data.pokemon] || []} />;
	}

	return (
		<Fragment>
			{allPokemonsQuery.loading ? (
				<Spinner />
			) : allPokemonsQuery.error ? (
				<Error description={allPokemonsQuery.error} />
			) : (
				<PokemonList list={allPokemonsQuery.data.pokemons || []} />
			)}
		</Fragment>
	);
};

export default React.memo(PokemonSection);
