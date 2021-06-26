import classes from "./App.module.css";
import Layout from "./Components/Layout/Layout";
import Input from "./Components/InputForm/Input";
import Detail from "./Components/Details/Detail";
import WeatherContext from "./Store/weather-context";
import { useContext } from "react";

function App() {
  const weatherCtx = useContext(WeatherContext);
  let customClass;
  if (weatherCtx.isSearched) {
    customClass = classes.heading;
  } else {
    customClass = classes.defaultHeading;
  }
  return (
    <>
      <Layout weather={weatherCtx.theme}>
        <h1 className={customClass}>TempFactor</h1>
        <main>
          <Input />
          {weatherCtx.isSearched && <Detail />}
        </main>
      </Layout>
    </>
  );
}

export default App;
