import gql from 'graphql-tag';
import { POKEMON_DETAILS } from './fragments';

export const GET_POKEMONS = gql`
	query($size: Int!) {
		pokemons(first: $size) {
			...PokemonDetails
		}
	}
	${POKEMON_DETAILS}
`;

export const GET_POKEMON = gql`
	query($name: String) {
		pokemon(name: $name) {
			...PokemonDetails
		}
	}
	${POKEMON_DETAILS}
`;

export const GET_POKEMON_LIST = gql`
	{
		pokemonList @client
	}
`;
