import Button from "../Button/Button";
import classes from "./List.module.css";
import { useState } from "react";

const List = (props) => {
  const [clicked, setClicked] = useState(false);
  const btnActiveHandler = (event) => {
    setClicked((prevState) => !prevState);
    const store =
      event.currentTarget.parentElement.getElementsByTagName("p")[1].innerText;
    navigator.clipboard.writeText(store);
  };
  return (
    <div className={classes.list}>
      <p className={classes.orglLnk}>{props.orglLnk}</p>
      <p className={classes.shrtLnk}>{props.shrtLnk}</p>
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
