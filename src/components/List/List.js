import Button from "../Button/Button";
import classes from "./List.module.css";

const List = () => {
  return (
    <article>
      <p className={classes.orglLnk}>jhfbsdfsbfsfsnf.com</p>
      <p className={classes.shrtLnk}>bit.ly</p>
      <Button className={classes.btn}>copy</Button>
    </article>
  );
};

export default List;
