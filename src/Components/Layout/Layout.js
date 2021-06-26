import classes from "./Layout.module.css";

const Layout = (props) => {
  let theme;
  switch (props.weather) {
    case "Clear":
      theme = classes.clearSky;
      break;
    case "Mist":
      theme = classes.mist;
      break;
    case "Haze":
      theme = classes.mist;
      break;
    case "Rain":
      theme = classes.rain;
      break;
    case "Drizzle":
      theme = classes.shower;
      break;
    case "Clouds":
      theme = classes.clearSky;
      break;
    case "Snow":
      theme = classes.snow;
      break;
    case "Thunderstorm":
      theme = classes.thunderstorm;
      break;
    case "dark":
      theme = classes.dark;
      break;
    default:
      theme = classes.default;
      break;
  }
  const customClass = `${classes.background} ${theme}`;
  return <div className={customClass}>{props.children}</div>;
};

export default Layout;
