import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
// import { setContext } from 'apollo-link-context';
// import gql from 'graphql-tag';

const cache = new InMemoryCache();
const http = new HttpLink({
	uri: 'https://graphql-pokemon.now.sh/'
});
const link = ApolloLink.from([http]);
const client = new ApolloClient({
	link,
	cache
});

export default client;
