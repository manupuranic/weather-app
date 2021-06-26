import { useContext } from "react";
import WeatherContext from "../../Store/weather-context";
import Card from "../UI/Card";
import classes from "./Detail.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours - 12 + ":" + minutes + ":" + seconds;
}

// const dummy = {
//   main: "Clouds",
//   description: "Overcast Clouds",
//   icon: "../../images/demo.png",
//   temp: "29",
//   pressure: "1006 mbar",
//   humidity: "48",
//   windSpeed: "6.68 m/s",
//   sunrise: msToTime(1624580730),
//   sunset: msToTime(1624627529),
//   windDir: "302",
// };

const Detail = (props) => {
  const weatherCtx = useContext(WeatherContext);
  const icon =
    "http://openweathermap.org/img/wn/" +
    weatherCtx.weatherData.icon +
    "@2x.png";
  const sunrise = msToTime(weatherCtx.weatherData.sunrise);
  const sunset = msToTime(weatherCtx.weatherData.sunset);

  const weatherDetails = (
    <div>
      <div className={classes.main}>
        <h1>
          {weatherCtx.weatherData.temp}
          <sup>°C</sup>
        </h1>
        <img src={icon} alt={weatherCtx.theme} />
        <h4>{weatherCtx.weatherData.description}</h4>
        <p>{weatherCtx.weatherData.name}</p>
        <hr />
      </div>
      <div className={classes["grid-container"]}>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Pressure</p>
          <h4 className={classes.itemValue}>
            {weatherCtx.weatherData.pressure} mbar
          </h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Humidity</p>
          <h4 className={classes.itemValue}>
            {weatherCtx.weatherData.humidity}%
          </h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Wind speed</p>
          <h4 className={classes.itemValue}>
            {weatherCtx.weatherData.windSpeed} m/s
          </h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Wind direction</p>
          <h4 className={classes.itemValue}>
            {weatherCtx.weatherData.windDir}
            <sup>°</sup>
          </h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Sunrise</p>
          <h4 className={classes.itemValue}>{sunrise} am</h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Sunset</p>
          <h4 className={classes.itemValue}>{sunset} pm</h4>
        </div>
      </div>
    </div>
  );

  const loadingContent = <LoadingSpinner />;

  let content = <p>Weather details not found!</p>;

  if (weatherCtx.error) {
    content = <p>Something went wrong! Please try again later</p>;
  }

  if (weatherCtx.isLoading) {
    content = loadingContent;
  }

  if (weatherDetails && !weatherCtx.isLoading && !weatherCtx.error) {
    content = weatherDetails;
  }

  return <Card className={classes.detailCover}>{content}</Card>;
};

export default Detail;
