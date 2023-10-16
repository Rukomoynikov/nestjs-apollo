import { useQuery } from "@apollo/client";
import { GetArticlesQuery } from "../__generated__/graphql.ts";
import { gql } from "../__generated__";
import { Header } from "../components/Header.tsx";
import { NewArticleForm } from "../components/NewArticleForm.tsx";
import { AuthContext } from "../providers/auth.provider.tsx";
import { useContext} from "react";

export const RootPage = () => {
  const { user} = useContext(AuthContext)

  const GET_ARTICLES = gql(/* GraphQL */ `
      query GetArticles {
          articles {
              id
              description
              title
              author {
                  email
                  name
              }
          }
      }
  `);

  const { loading, error, data } = useQuery<GetArticlesQuery>(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Not found</p>;

  const articlesList = data.articles.map((article) => {
    return <div key={article.id}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>{article.author.email} by {article.author.name}</p>
    </div>
  })

  return <>
    <Header />
    {user && <NewArticleForm />}
    <div>
      <h1>Articles</h1>
      {articlesList}
    </div>
  </>
}