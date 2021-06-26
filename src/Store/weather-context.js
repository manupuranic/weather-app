import React, { useState } from "react";

const WeatherContext = React.createContext({
  weatherData: {},
  isSearched: false,
  isLoading: false,
  error: null,
  theme: "default",
  toggleSearch: () => {},
  getWeather: (city) => {},
});

export const WeatherProvider = (props) => {
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [theme, setTheme] = useState("default");

  const detailsToggle = () => {
    setIsSearched(false);
  };

  const getWeather = async (city) => {
    setIsSearched(true);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=4f8b0722c0db57af08847594868b32fc"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const updatedWeather = {
        temp: data.main.temp.toFixed(0),
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDir: data.wind.deg,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        name: data.name,
        country: data.sys.country,
      };

      setTheme(data.weather[0].main);
      setWeatherData(updatedWeather);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const weatherContext = {
    weatherData: weatherData,
    isSearched: isSearched,
    isLoading: isLoading,
    error: error,
    theme: theme,
    getWeather: getWeather,
    toggleSearch: detailsToggle,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
