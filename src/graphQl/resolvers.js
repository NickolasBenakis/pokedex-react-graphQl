import { GET_POKEMON_LIST } from './queries';
import gql from 'graphql-tag';

export const typeDefs = gql`
	extend type Mutation {
		AddPokemonsToList(pokemon: Pokemon!): [Pokemon]!
	}
`;
export const resolvers = {
	Mutation: {
		addPokemonsToList: (_root, { pokemon }, { cache }) => {
			const { pokemonList } = cache.readQuery({
				query: GET_POKEMON_LIST
			});

			cache.writeQuery({
				query: GET_POKEMON_LIST,
				data: { pokemonList: pokemon }
			});
			return pokemon;
		}
	}
};
