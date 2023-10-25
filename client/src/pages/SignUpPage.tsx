import { SignUpForm } from "../components/SignUp.tsx";
import { SignInUpScreen } from '../components/ui/sign_in_up_screen.tsx'
export const SignUpPage = () => {
  return <>
    <SignInUpScreen link={{ text: "Create an account", href: "users/sign_in" }}>
      <SignUpForm />
    </SignInUpScreen>
  </>
}