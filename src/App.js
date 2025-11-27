import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  // Fetch weather for default city (Ankara, Turkey) on component mount
  useEffect(() => {
    fetchWeather('Ankara,Turkey');
  }, []);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY
        }
      });
      setWeather(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Failed to fetch weather data. Please check the city name and try again.'
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    fetchWeather(city);
  };

  return (
    <div className="App">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Weather App
          </h1>
          <p className="app-subtitle">Get real-time weather information for any city</p>
        </header>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && weather && (
          <WeatherCard weather={weather} />
        )}

        <footer className="app-footer">
          <p>Student ID: 101515982 | COMP3123 - Lab Test 2</p>
          <p>Weather data provided by <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
