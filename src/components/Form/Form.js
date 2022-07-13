import classes from "./Form.module.css";
import Button from "../Button/Button";
import { useRef } from "react";

const Form = () => {
  const inputRef = useRef();
  const submitLinkHandler = () => {};
  return (
    <form onSubmit={submitLinkHandler} ref={inputRef}>
      <input type="text" placeholder="shorten your link here"></input>
      <Button type="submit" className={classes.btn}>
        shorten it!
      </Button>
    </form>
  );
};

export default Form;
