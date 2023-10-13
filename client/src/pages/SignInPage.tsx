import { SignInForm } from "../components/SignInForm.tsx";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  return (
    <>
      <Link to="/users/sign_up">Create an account
      </Link>
      
      <SignInForm />
    </>
  )
}