import Card from "../UI/Card";
import classes from "./Detail.module.css";

function msToTime(duration) {
  let milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

const dummy = {
  main: "Clouds",
  description: "Overcast Clouds",
  icon: "../../images/demo.png",
  temp: "29",
  pressure: "1006 mbar",
  humidity: "48",
  windSpeed: "6.68 m/s",
  sunrise: msToTime(1624580730),
  sunset: msToTime(1624627529),
  windDir: "302",
};

const Detail = (props) => {
  return (
    <Card className={classes.detailCover}>
      <div className={classes.main}>
        <h1>
          {dummy.temp}
          <sup>°C</sup>
        </h1>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt={dummy.main}
        />
        <h4>{dummy.description}</h4>
        <hr />
      </div>
      <div className={classes["grid-container"]}>
        <div className={classes["grid-item"]}>
          <h5>Pressure</h5>
          <p>{dummy.pressure}</p>
        </div>
        <div className={classes["grid-item"]}>
          <h5>Humidity</h5>
          <p>{dummy.humidity}</p>
        </div>
        <div className={classes["grid-item"]}>
          <h5>Wind speed</h5>
          <p>{dummy.windSpeed}</p>
        </div>
        <div className={classes["grid-item"]}>
          <h5>Wind direction</h5>
          <p>
            {dummy.windDir}
            <sup>°</sup>
          </p>
        </div>
        <div className={classes["grid-item"]}>
          <h5>Sunrise</h5>
          <p>{dummy.sunrise}</p>
        </div>
        <div className={classes["grid-item"]}>
          <h5>Sunset</h5>
          <p>{dummy.sunset}</p>
        </div>
      </div>
    </Card>
  );
};

export default Detail;
