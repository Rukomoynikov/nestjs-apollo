import { AuthContext } from "../providers/auth.provider.tsx";
import { useContext} from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user} = useContext(AuthContext)

  return <>
    <Link to={"/"}>Home</Link>
    <Link to={"/users/sign_in"}>SignIn</Link>
    <Link to={"/users/sign_up"}>SignUp</Link>
    <h1>{user.email}</h1>
  </>
}