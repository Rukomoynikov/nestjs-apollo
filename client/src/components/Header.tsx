import { AuthContext } from "../providers/auth.provider.tsx";
import { useContext} from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user} = useContext(AuthContext)

  const menu = user
    ? <>
      <h1>{user.email}</h1>
    </>
    : <>
      <Link to={"/users/sign_in"}>SignIn</Link>
      <Link to={"/users/sign_up"}>SignUp</Link>
      </>

  return <>
    {menu}
  </>
}


