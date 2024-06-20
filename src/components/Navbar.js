// src/components/Navbar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../redux/newsSlice';

const categories = ['general', 'business', 'technology', 'entertainment'];

const Navbar = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(fetchNews({ category, page: 1 }));
  };

  return (
    <nav className="navbar">
      <h1>News Portal</h1>
      <div>
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryChange(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
