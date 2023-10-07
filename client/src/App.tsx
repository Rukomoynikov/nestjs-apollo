import { useQuery } from '@apollo/client';
import { gql } from '../src/__generated__/';

const GET_ARTICLES = gql(/* GraphQL */ `
    query GetArticles {
        articles {
            id
            title
            description
        }
    }
`);

function App() {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      {data.articles.map((article) => {
        return <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      })}
    </>
  )
}

export default App
