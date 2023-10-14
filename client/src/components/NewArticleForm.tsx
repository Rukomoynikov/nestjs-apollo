import { gql } from "../__generated__";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewArticleForm = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    title: '',
    body: '',
    description: ''
  });

  const CREATE_ARTICLE = gql(/* GraphQL */ `
      mutation CreateArticle($body: String!, $title: String!, $description: String!) {
          createArticle(createArticleInput: {body: $body, title: $title, description: $description}) {
                            id
                            body
                            title
                            description   
          }
      }
  `);

  const [submitArticle] = useMutation(CREATE_ARTICLE, {
    variables: { body: formState.body, title: formState.title, description: formState.description },
    onCompleted: () => {
      setFormState({ title: '', body: '', description: '' });
      navigate("/");
    }
  });

  return (
    <div>
      <h1>New Article Form</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitArticle();
        }}
      >
        <input
          value={formState.title}
          type={"text"}
          onChange={e => setFormState({...formState, title: e.target.value})}
        />

        <textarea
          onChange={e => setFormState({...formState, description: e.target.value})}
          value={formState.description}
        />

        <textarea
          onChange={e => setFormState({...formState, body: e.target.value})}
          value={formState.body}
        />

        <button>Submit article</button>
      </form>
    </div>
  );
}