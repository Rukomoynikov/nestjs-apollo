// https://www.howtographql.com/react-apollo/5-authentication/

import { gql } from "../__generated__";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''
  });

  const SIGN_IN = gql(/* GraphQL */ `
      mutation SignIn($email: String!, $password: String!) {
          signIn(data: {email: $email, password: $password}) {
              id
              email
          }
      }
  `);

  const [login] = useMutation(SIGN_IN, {
    variables: { email: formState.email, password: formState.password },
    onCompleted: () => {
      navigate("/");
    }
  });


  return <>
    <h4>
      {formState.login ? 'Login' : 'Sign Up'}
    </h4>

    <form
      onSubmit={e => {
        e.preventDefault();
        login();
      }}
    >
      {!formState.login && (
        <input
          value={formState.name}
          type={"text"}
          placeholder={"Your name"}
          onChange={e => setFormState({...formState, name: e.target.value})}
        />
      )}

      <input
        value={formState.email}
        type={"text"}
        placeholder={"Your email"}
        onChange={e => setFormState({...formState, email: e.target.value})}
      />

      <input
        value={formState.password}
        type={"password"}
        placeholder={"Your password"}
        onChange={e => setFormState({...formState, password: e.target.value})}
      />

      <div>
        <button
          className="pointer mr2 button"
          onClick={() => console.log('onClick')}
        >
          {formState.login ? 'login' : 'create account'}
        </button>
        <button
          className="pointer button"
          onClick={() =>
            setFormState({
              ...formState,
              login: !formState.login
            })
          }
        >
          {formState.login
            ? 'need to create an account?'
            : 'already have an account?'}
        </button>
      </div>
    </form>
  </>
}