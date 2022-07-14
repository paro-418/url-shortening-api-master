import classes from "./TopPart.module.css";
import girl from "../../images/illustration-working.svg";
import Button from "../Button/Button";

const TopPart = () => {
  return (
    <div className={classes.topPart}>
      <div className={classes.left}>
        <h1 className={classes.leftHeading}>More than just shorter links</h1>
        <p className={classes.description}>
          Build your brand recognition and get detailed insights on how your
          links are performing
        </p>
        <Button type="submit" className={classes.btn}>
          get started
        </Button>
      </div>
      <div className={classes.right}>
        <img src={girl} className={classes.thumbnail} />
      </div>
    </div>
  );
};

export default TopPart;
