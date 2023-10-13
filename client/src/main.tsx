import React from 'react'
import ReactDOM from 'react-dom/client'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
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
    <Theme>
      <ApolloProvider client={client}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ApolloProvider>
    </Theme>
  </React.StrictMode>,
)
