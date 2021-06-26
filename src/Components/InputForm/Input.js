import Card from "../UI/Card";
import classes from "./Input.module.css";
import WeatherContext from "../../Store/weather-context";
import { useContext, useState } from "react";

const Input = (props) => {
  const weatherCtx = useContext(WeatherContext);
  const [enteredCity, setEnteredCity] = useState("");

  const cityInputHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const city = enteredCity;
    if (city.length === 0) {
      return;
    }
    weatherCtx.getWeather(city);
  };

  const resetHandler = () => {
    weatherCtx.toggleSearch();
    setEnteredCity("");
  };

  return (
    <Card className={classes.cover}>
      <form className={classes.inputForm} onSubmit={submitHandler}>
        <input
          onChange={cityInputHandler}
          type="text"
          placeholder="Enter the city..."
          value={enteredCity}
        />
        {weatherCtx.isSearched && (
          <button
            type="button"
            className={classes.reset}
            onClick={resetHandler}>
            Reset
          </button>
        )}

        <button type="submit">Search</button>
      </form>
    </Card>
  );
};

export default Input;
