import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import '../styles/main.css';
import { pokeClient } from '../graphql/clients';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={pokeClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
