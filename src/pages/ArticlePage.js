import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'YOUR_NEWS_API_KEY';
const BASE_URL = 'https://newsapi.org/v2';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/everything`, {
          params: {
            q: id,
            apiKey: API_KEY,
          },
        });
        setArticle(response.data.articles[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="article-page">
      {article && (
        <>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.content}</p>
        </>
      )}
    </div>
  );
};

export default ArticlePage;
