import { SignInForm } from "../components/SignInForm.tsx";
import { Link } from "react-router-dom";
import { SignInUpScreen } from "../components/ui/sign_in_up_screen.tsx";

export const SignInPage = () => {
  return (
    <>
      <SignInUpScreen link={{ text: "Login", href: "users/sign_up" }}>
        <SignInForm />
      </SignInUpScreen>

      <Link to="/users/sign_up">Create an account</Link>
    </>
  )
}