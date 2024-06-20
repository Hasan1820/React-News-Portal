import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.url === article.url);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };

  return (
    <div className="article-card">
      <img src={article.urlToImage} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <Link to={`/article/${article.url}`}>Read More</Link>
      <button onClick={handleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default ArticleCard;
