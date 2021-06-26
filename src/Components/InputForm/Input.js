import Card from "../UI/Card";
import classes from "./Input.module.css";
import WeatherContext from "../../Store/weather-context";
import { useContext, useRef } from "react";

const Input = (props) => {
  const weatherCtx = useContext(WeatherContext);
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const city = cityInputRef.current.value;
    if (city.length === 0) {
      return;
    }
    weatherCtx.getWeather(city);
  };

  return (
    <Card className={classes.cover}>
      <form className={classes.inputForm} onSubmit={submitHandler}>
        <input ref={cityInputRef} type="text" placeholder="Enter the city..." />
        {weatherCtx.isSearched && (
          <button type="button" className={classes.reset}>
            Reset
          </button>
        )}

        <button type="submit">Search</button>
      </form>
    </Card>
  );
};

export default Input;
