import gql from 'graphql-tag';

export const POKEMON_DETAILS = gql`
	fragment PokemonDetails on Pokemon {
		id
		number
		name
		types
		image
		resistant
		attacks {
			fast {
				name
				type
				damage
			}
			special {
				name
				type
				damage
			}
		}
		weaknesses
		evolutions {
			id
			number
			name
			image
		}
	}
`;
