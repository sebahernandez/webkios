import { useMemo } from 'react';
import { WebSocketLink } from "@apollo/client/link/ws"; 
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

/* function createIsomorphLink() {
  return new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  });
} */

function createIsomorphLink() {
  return process.browser ? new WebSocketLink({
    uri: 'wss://cuddly-hog-22.hasura.app/v1/graphql',
    options: {
      reconnect: true,
      timeout: 10000,
      connectionParams: {
        headers: {
          'content-type' : 'application/json',
          'x-hasura-admin-secret':  'kxUJ2vmT0kihpyf9x7MDVAj1OoURuQzMXhN9O8JuLvMhVk05aSIKL4IdQZ4WXNDN',
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TUR`
        }
      }
    }// Additional fetch() options like `credentials` or `headers`
  }) : undefined;
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache 
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
