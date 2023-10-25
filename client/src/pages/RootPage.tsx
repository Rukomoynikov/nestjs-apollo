import { useQuery } from "@apollo/client";
import { Article } from "../__generated__/graphql.ts";
import { gql } from "../__generated__";
import { Header } from "../components/Header.tsx";
import { NewArticleForm } from "../components/NewArticleForm.tsx";
import { AuthContext } from "../providers/auth.provider.tsx";
import { useContext, useState } from "react";

export const RootPage = () => {
  const user = useContext(AuthContext)
  const [articles, setArticles] = useState<Article[]>([])

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

  const { loading, error, data } = useQuery(GET_ARTICLES, {
    onCompleted (data) {
      setArticles(data.articles)
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Not found</p>;

  const articlesList = articles.map((article) => {
    return <div key={article.id}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>{article.author.email} by {article.author.name}</p>
    </div>
  })

  const addArticle = (article: Article) => {
    setArticles([article, ...articles])
  }

  return <>
    <div className={'antialiased container'}>
      <Header />
      {user.isAuthenticated && <NewArticleForm setArticles={addArticle} />}
      <div>
        <h1>Articles</h1>
        {articlesList}
      </div>
    </div>
  </>
}