import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { main, weather: weatherDetails, wind, sys, name, clouds, visibility } = weather;
  const weatherInfo = weatherDetails[0];
  const iconUrl = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
  
  // Convert temperature from Kelvin to Celsius
  const tempCelsius = (main.temp - 273.15).toFixed(1);
  const feelsLikeCelsius = (main.feels_like - 273.15).toFixed(1);
  const tempMinCelsius = (main.temp_min - 273.15).toFixed(1);
  const tempMaxCelsius = (main.temp_max - 273.15).toFixed(1);
  
  // Format date
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location-info">
          <h1 className="city-name">{name}, {sys.country}</h1>
          <p className="date">{currentDate}</p>
        </div>
      </div>

      <div className="weather-main">
        <div className="weather-icon-section">
          <img src={iconUrl} alt={weatherInfo.description} className="weather-icon" />
          <p className="weather-description">{weatherInfo.description}</p>
        </div>
        
        <div className="temperature-section">
          <h2 className="temperature">{tempCelsius}°C</h2>
          <p className="feels-like">Feels like {feelsLikeCelsius}°C</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v10"></path>
              <path d="m4.93 10.93 1.41 1.41"></path>
              <path d="M2 18h2"></path>
              <path d="M20 18h2"></path>
              <path d="m19.07 10.93-1.41 1.41"></path>
              <path d="M22 22H2"></path>
              <path d="m16 6-4 4-4-4"></path>
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Min / Max</p>
            <p className="detail-value">{tempMinCelsius}°C / {tempMaxCelsius}°C</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Humidity</p>
            <p className="detail-value">{main.humidity}%</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Wind Speed</p>
            <p className="detail-value">{wind.speed} m/s</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 14 4-4"></path>
              <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Pressure</p>
            <p className="detail-value">{main.pressure} hPa</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Visibility</p>
            <p className="detail-value">{(visibility / 1000).toFixed(1)} km</p>
          </div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
            </svg>
          </div>
          <div className="detail-content">
            <p className="detail-label">Cloudiness</p>
            <p className="detail-value">{clouds.all}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

