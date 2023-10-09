import { gql } from "../__generated__";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export const SignUpForm = () => {
  const SIGN_UP = gql(/* GraphQL */ `
      mutation SignUp($email: String!, $password: String!) {
          createUser(data: {email: $email, password: $password}) {
              id
              email
          }
      }
  `);

  const [mutateFunction, { data, loading, error }] = useMutation(SIGN_UP);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  console.log(data)

  return <>
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