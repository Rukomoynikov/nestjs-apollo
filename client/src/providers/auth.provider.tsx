import { createContext, FC, useState } from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";

interface AuthContextType {
  isUserLoaded: boolean,
  user: { email: string | null }
}

const AuthContext = createContext<AuthContextType>({isUserLoaded: false, user: {email: null}})

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
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useQuery(GET_ME, {
    onCompleted: (data) => {
      setIsUserLoaded(true)
      setUserEmail(data.me.email)
    },
    onError: () => {
      setIsUserLoaded(true)
    }
  })

  if(!isUserLoaded) {
    return <></>
  }

  return (
    <AuthContext.Provider value={{isUserLoaded: isUserLoaded, user: { email: userEmail }}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };


