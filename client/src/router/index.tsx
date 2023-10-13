import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { SignUpPage } from "../pages/SignUpPage.tsx";
import { SignInPage } from "../pages/SignInPage.tsx";
import { RootPage } from "../pages/RootPage.tsx";

export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path={"/"} element={<RootPage />} />
    <Route path={"/users/sign_in"} element={<SignInPage />} />
    <Route path={"/users/sign_up"} element={<SignUpPage />} />
  </>
));
