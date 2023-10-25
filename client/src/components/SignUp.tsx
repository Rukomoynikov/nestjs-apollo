import { gql } from "../__generated__";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button.tsx"

export const SignUpForm = () => {
  const SIGN_UP = gql(/* GraphQL */ `
      mutation SignUp($email: String!, $password: String!, $name: String!) {
          createUser(data: {email: $email, password: $password, name: $name}) {
              id
              email
              name
          }
      }
  `);

  const [mutateFunction, { data, loading, error }] = useMutation(SIGN_UP);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  console.log(data)

  return <>
    <h2>Sign up</h2>

    <form
      onSubmit={e => {
        e.preventDefault();
        mutateFunction({ variables: { email: email, password: password, name: name } });
      }}
    >

      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />

      <Input
        value={name}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />

      <Input
        value={name}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />

      <Button type="submit">Sign up</Button>
    </form>
  </>
}