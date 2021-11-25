import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';

import '../styles/main.css';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
