import Card from "../UI/Card";
import classes from "./Detail.module.css";

const dummy = {
  main: "Clouds",
  description: "Overcast Clouds",
  icon: "../../images/demo.png",
  temp: "29.36 deg",
  pressure: "1006 bar",
  humidity: "48",
  windSpeed: "6.68 m/s",
  sunrise: new Date(1624580647),
  sunset: new Date(1624627529),
};

const Detail = (props) => {
  return (
    <Card className={classes.detailCover}>
      <div className={classes.main}>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt={dummy.main}
        />
        <h3>{dummy.description}</h3>
        <p>{dummy.temp}</p>
        <hr />
      </div>
    </Card>
  );
};

export default Detail;
