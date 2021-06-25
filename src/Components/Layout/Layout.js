import classes from "./Layout.module.css";

const Layout = (props) => {
  let theme;
  switch (props.weather) {
    case "clear":
      theme = classes.clearSky;
      break;
    case "mist":
      theme = classes.mist;
      break;
    case "rain":
      theme = classes.rain;
      break;
    case "scattered":
      theme = classes.scatteredClouds;
      break;
    case "snow":
      theme = classes.snow;
      break;
    case "thunderstorm":
      theme = classes.thunderstorm;
      break;
    default:
      theme = classes.clearSky;
      break;
  }
  const customClass = `${classes.background} ${theme}`;
  return <div className={customClass}>{props.children}</div>;
};

export default Layout;
