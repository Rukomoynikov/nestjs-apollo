import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider} from "./providers/auth.provider.tsx";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
