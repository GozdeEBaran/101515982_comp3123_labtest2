# 101515982_comp3123_labtest2 - Weather App

A modern, responsive React weather application that displays real-time weather information for any city using the OpenWeatherMap API.

## Student Information
- **Student ID**: 101515982
- **Course**: COMP3123 - Full Stack Development
- **Lab Test**: Lab Test 2

## Project Description

This Weather App allows users to search for and view current weather conditions for any city worldwide. The application features a clean, modern UI with gradient backgrounds, smooth animations, and comprehensive weather details including temperature, humidity, wind speed, pressure, visibility, and cloudiness.

## Features

- 🌤️ Real-time weather data from OpenWeatherMap API
- 🔍 Search functionality for any city worldwide
- 🌡️ Temperature display in Celsius
- 💨 Comprehensive weather details (humidity, wind speed, pressure, visibility, cloudiness)
- 🎨 Beautiful gradient UI with smooth animations
- 📱 Fully responsive design for mobile and desktop
- 🖼️ Weather condition icons from OpenWeatherMap
- 🌍 Default location: Ankara, Turkey

## Technologies Used

- **React** (v18) - Frontend framework
- **Axios** - HTTP client for API requests
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Styling with gradients and animations
- **React Hooks** - useState, useEffect for state management

## API Used

**OpenWeatherMap API** - Current Weather Data
- API Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Documentation: https://openweathermap.org/current
- Weather Icons: https://openweathermap.org/weather-conditions

## React Concepts Demonstrated

1. **State Management**: Using `useState` hook to manage weather data, loading states, and errors
2. **Effects/Lifecycle**: Using `useEffect` hook to fetch weather data on component mount
3. **Props**: Passing data between parent (App) and child components (SearchBar, WeatherCard)
4. **Component Composition**: Breaking down UI into reusable components
5. **Event Handling**: Managing user interactions (search form submission)
6. **Conditional Rendering**: Displaying loading, error, or weather data based on state

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/101515982_comp3123_labtest2.git
   cd 101515982_comp3123_labtest2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API Key**
   - Sign up for a free API key at https://openweathermap.org/api
   - Create a `.env` file in the root directory
   - Add your API key:
     ```
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```
   - You can use the `.env.example` file as a template

4. **Run the application**
   ```bash
   npm start
   ```
   - The app will open at http://localhost:3000

5. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
101515982_comp3123_labtest2/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.js          # Search input component
│   │   ├── SearchBar.css         # Search bar styling
│   │   ├── WeatherCard.js        # Weather display component
│   │   └── WeatherCard.css       # Weather card styling
│   ├── App.js                    # Main application component
│   ├── App.css                   # Global app styling
│   └── index.js                  # React entry point
├── .env.example                  # Environment variable template
├── .gitignore                    # Git ignore file
├── package.json                  # Project dependencies
└── README.md                     # Project documentation
```

## Components Overview

### App.js
- Main application component
- Manages application state (weather data, loading, errors)
- Handles API calls using axios
- Implements useEffect for initial data fetch
- Passes props to child components

### SearchBar.js
- Controlled input component
- Manages local search input state
- Handles form submission
- Passes search query to parent via props

### WeatherCard.js
- Displays weather information
- Receives weather data via props
- Shows temperature, weather icons, and detailed metrics
- Responsive grid layout for weather details

## API Integration Details

The app uses axios to make API calls to OpenWeatherMap:

```javascript
const response = await axios.get(API_URL, {
  params: {
    q: city,
    appid: API_KEY
  }
});
```

### Data Displayed:
- City name and country
- Current temperature (Celsius)
- Feels like temperature
- Min/Max temperature
- Weather condition with icon
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Visibility
- Cloudiness percentage

## Screenshots

### Main Interface - Ankara, Turkey
![Weather App - Ankara](screenshots/ankara-weather.png)

### Search Functionality
![Search Feature](screenshots/search-feature.png)

### Weather Details
![Weather Details](screenshots/weather-details.png)

### Mobile Responsive View
![Mobile View](screenshots/mobile-view.png)

### Error Handling
![Error State](screenshots/error-handling.png)

## Postman API Testing

The following screenshots demonstrate API testing using Postman:

### Successful API Response - Ankara
![Postman Ankara](screenshots/postman-ankara.png)

### API Response Structure
![Postman Response](screenshots/postman-response-structure.png)

## Deployment

The application is hosted on: **[DEPLOYMENT_URL_HERE]**

Deployment platforms used: Vercel / Railway / Render

### Deployment Steps (Vercel):
1. Push code to GitHub
2. Connect GitHub repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## UI/UX Features

- **Gradient Background**: Purple-blue gradient for modern look
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Weather Icons**: Dynamic icons from OpenWeatherMap
- **Responsive Grid**: Adapts to different screen sizes
- **Loading States**: Spinner animation during data fetch
- **Error Handling**: User-friendly error messages
- **Custom Icons**: SVG icons for weather details

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Issues / Future Improvements

- [ ] Add 5-day weather forecast
- [ ] Implement geolocation for automatic city detection
- [ ] Add temperature unit toggle (Celsius/Fahrenheit)
- [ ] Add weather history and favorites
- [ ] Implement dark/light mode toggle

## License

This project is created for educational purposes as part of COMP3123 Lab Test 2.

## Contact

For questions or issues, contact:
- Email: pritesh.patel2@georgebrown.ca

## Acknowledgments

- OpenWeatherMap for providing the weather API
- George Brown College - COMP3123 Course
- React documentation and community

---

**Note**: Remember to never commit your `.env` file with actual API keys to version control. The `.env.example` file is provided as a template.
