import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { WeatherProvider } from "./Store/weather-context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
