import classes from "./TopPart.module.css";
import girl from "../../images/illustration-working.svg";

const TopPart = () => {
  return (
    <div>
      <div className={classes.left}></div>
      <div className={classes.right}>
        <img src={girl} />
      </div>
    </div>
  );
};

export default TopPart;
