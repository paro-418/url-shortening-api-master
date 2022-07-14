import List from "../List/List";
import classes from "./ListContainer.module.css";
import LinkContext from "../../data/DataContext";
import { useContext } from "react";


const ListContainer = (props) => {
  const lnkCtx = useContext(LinkContext);
  return <main className={classes.listContainer}>
    {
      lnkCtx.linkArray.map((obj,index) => <List key = {index} orglLnk = {obj.orglLnk} shrtLnk = {obj.shrtLnk}/>)
    }
  </main>;
};

export default ListContainer;
