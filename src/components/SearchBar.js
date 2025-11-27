import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name (e.g., Ankara, Turkey)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

