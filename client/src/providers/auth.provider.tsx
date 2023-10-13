import { createContext, FC, useState } from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";

interface AuthContextType {
  isUserLoaded: boolean,
  user: {
    email: string
  } | null
}

const AuthContext = createContext<AuthContextType>({isUserLoaded: false, user: null})

type Props = {
  children: JSX.Element | JSX.Element[]
}

const GET_ME = gql(/* GraphQL */ `
    query GetMe {
        me {
            email
        }
    }
`);


const AuthProvider: FC<Props> = ({ children }) => {
  const [isUserLoaded, setIsUserLoaded] = useState(false)
  const [user, setUser] = useState(null)

  useQuery(GET_ME, {
    onCompleted: (data) => {
      setIsUserLoaded(true)
      setUser({ ...data.me })
    },
    onError: () => {
      setIsUserLoaded(true)
    }
  })

  if(!isUserLoaded) {
    return <></>
  }

  return (
    <AuthContext.Provider value={{isUserLoaded: isUserLoaded, user: user}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };


