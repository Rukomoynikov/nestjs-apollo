import { AuthContext } from "../providers/auth.provider.tsx";
import { buttonVariants } from "../components/ui/button.tsx"
import { useContext} from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const user = useContext(AuthContext)

  const menu = user.isAuthenticated
    ? <>
      <h1>{user.email}</h1>
    </>
    : <>
      <div className={'flex gap-x-1.5'}>
        <Link className={buttonVariants({ variant: "outline" })} to={"/users/sign_in"}>SignIn</Link>
        <Link className={buttonVariants({ variant: "outline" })} to={"/users/sign_up"}>SignUp</Link>
      </div>
      </>

  return <>
    <div className={'flex items-center justify-between space-y-2'}>
      <div className={'text-3xl font-bold tracking-tight'}>
        MeetMe
      </div>
      {menu}
    </div>
  </>
}


