import List from "../List/List";
import classes from "./ListContainer.module.css";

const ListContainer = (props) => {
  return <main className={classes.listContainer}>
    <List/>
    <List/>
    <List/>
    <List/>
  </main>;
};

export default ListContainer;
