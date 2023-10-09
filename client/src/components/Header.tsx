import { AuthContext } from "../providers/auth.provider.tsx";
import { useContext} from "react";

export const Header = () => {
  const { user} = useContext(AuthContext)

  return <>
    <h1>{user.email}</h1>
  </>
}