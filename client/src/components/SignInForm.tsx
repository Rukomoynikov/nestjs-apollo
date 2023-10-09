import { gql } from "../__generated__";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export const SignInForm = () => {
  const SIGN_IN = gql(/* GraphQL */ `
      mutation SignIn($email: String!, $password: String!) {
          signIn(data: {email: $email, password: $password}) {
              id
              email
          }
      }
  `);

  const [mutateFunction, { data, loading, error }] = useMutation(SIGN_IN);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  console.log(data)

  return <>
    <h2>Log in</h2>
    <form
      onSubmit={e => {
        e.preventDefault();
        mutateFunction({ variables: { email: email, password: password } });
      }}
    >
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />

      <button type="submit">Add Todo</button>
    </form>
  </>
}