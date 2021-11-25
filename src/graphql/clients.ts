import { ApolloClient, InMemoryCache } from '@apollo/client';

export const listClient = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

export const pokeClient = new ApolloClient({
  uri: 'https://graphqlpokemon.favware.tech/',
  cache: new InMemoryCache(),
});
