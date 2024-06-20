// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../redux/newsSlice';
import ArticleCard from '../components/ArticleCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.news);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('general');

  useEffect(() => {
    dispatch(fetchNews({ category: currentCategory, page: currentPage }));
  }, [dispatch, currentCategory, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="home-page">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && articles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
