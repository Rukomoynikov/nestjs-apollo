// https://raw.githubusercontent.com/Rukomoynikov/codemetrics_el/aaa3c30478d2751697d040ede689974c5f97e67a/client/src/providers/auth_provider.tsx?token=GHSAT0AAAAAAB7THNBUMHHQTUQWRI4YGNUQZJQGC7A
// https://github.com/Rukomoynikov/codemetrics_el/commit/aaa3c30478d2751697d040ede689974c5f97e67a#diff-d53fd92baf801e02f9d3c5330c9cac6950f88e439d97ea64347b6cb50b186477

import React, { createContext, useState, type Dispatch } from 'react'
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";

interface AuthenticatedState {
  isAuthenticated: true
  email: string
}

interface NonAuthenticatedState {
  isAuthenticated: false
}

const AuthContext = createContext<AuthenticatedState | NonAuthenticatedState>({ isAuthenticated: false })
const AuthDispatchContext = createContext<Dispatch<AuthenticatedState | NonAuthenticatedState>>(() => {})

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

const defaultAuthState: NonAuthenticatedState = {
  isAuthenticated: false
}

const AuthProvider: React.FunctionComponent<Props> = ({ children }) => {
  const GET_ME = gql(/* GraphQL */ `
      query GetMe {
          me {
              email
          }
      }
  `);

  const [user, setUser] = useState<AuthenticatedState | NonAuthenticatedState>(defaultAuthState)
  const [loaded, setLoaded] = useState(false)

  useQuery(GET_ME, {
    onCompleted: (data) => {
      setLoaded(true)
      setUser({ ...data.me, isAuthenticated: true })
    },
    onError: () => {
      setLoaded(true)
    }
  })

  return (
    <AuthContext.Provider value={user}>
      <AuthDispatchContext.Provider value={setUser}>
        { loaded && children }
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext, AuthDispatchContext }


