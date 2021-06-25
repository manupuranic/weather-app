import Card from "../UI/Card";
import classes from "./Input.module.css";

const Input = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.cover}>
      <form className={classes.inputForm} onSubmit={submitHandler}>
        <input type="text" placeholder="Enter the city..." />
        <button type="submit">Search</button>
      </form>
    </Card>
  );
};

export default Input;
