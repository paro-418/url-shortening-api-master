import Button from "../Button/Button";
import classes from "./List.module.css";
import { useState } from "react";

const List = () => {
  const [clicked, setClicked] = useState(false);
  const btnActiveHandler = () => {
    setClicked((prevState) => !prevState);
  };
  return (
    <div className={classes.list}>
      <p className={classes.orglLnk}>jhfbsdfsbfsfsnf.com</p>
      <p className={classes.shrtLnk}>bit.ly</p>
      <Button
        callFunction={btnActiveHandler}
        className={`${classes.btn} ${clicked ? classes.btnActive : ""}`}
      >
        {clicked ? "copied!" : "copy"}
      </Button>
    </div>
  );
};

export default List;
