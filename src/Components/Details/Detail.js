import Card from "../UI/Card";
import classes from "./Detail.module.css";

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
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
          <p className={classes.itemName}>Pressure</p>
          <h4 className={classes.itemValue}>{dummy.pressure}</h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Humidity</p>
          <h4 className={classes.itemValue}>{dummy.humidity}</h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Wind speed</p>
          <h4 className={classes.itemValue}>{dummy.windSpeed}</h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Wind direction</p>
          <h4 className={classes.itemValue}>
            {dummy.windDir}
            <sup>°</sup>
          </h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Sunrise</p>
          <h4 className={classes.itemValue}>{dummy.sunrise}</h4>
        </div>
        <div className={classes["grid-item"]}>
          <p className={classes.itemName}>Sunset</p>
          <h4 className={classes.itemValue}>{dummy.sunset}</h4>
        </div>
      </div>
    </Card>
  );
};

export default Detail;
