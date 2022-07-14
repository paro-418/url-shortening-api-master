import classes from "./Form.module.css";
import Button from "../Button/Button";
import { useRef, useState } from "react";
import { useContext } from "react";
import LinkContext from "../../data/DataContext";

const Form = () => {
  const [focus, setFocus] = useState(false);
  const lnkCtx = useContext(LinkContext);
  const inputRef = useRef();
  const submitLinkHandler = (event) => {
    event.preventDefault();
    setFocus(false);
    lnkCtx.addLinkHandler(inputRef.current.value);
    inputRef.current.value = "";
  };

  const focusHandler = () => {
    setFocus(true);
  };

  return (
    <form onSubmit={submitLinkHandler} className={classes.form}>
      <input
        onFocus={focusHandler}
        type="text"
        placeholder="shorten your link here"
        ref={inputRef}
        className={classes.input}
      ></input>
      {!lnkCtx.isValidLnk && !focus && (
        <p className={classes.error}>Please enter a valid URL</p>
      )}
      <Button type="submit" className={classes.btn}>
        shorten it!
      </Button>
    </form>
  );
};

export default Form;
