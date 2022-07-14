import classes from "./SingleButton.module.css";
import Button from "../Button/Button";

const SingleButton = () => {
  return (
    <div className={classes.singleButton}>
      <h1>Boost your links today</h1>
      <Button type="submit" className={classes.btn}>
        Get started
      </Button>
    </div>
  );
};

export default SingleButton;
