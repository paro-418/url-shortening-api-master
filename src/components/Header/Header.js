import classes from "./Header.module.css";
import logo from "../../images/logo.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} />
      <nav>
        <ul>
          <li>feature</li>
          <li>pricing</li>
          <li>resources</li>
        </ul>
      </nav>
      <div className={classes.btnContainer}>
        <Button type="submit" className={classes.login}>
          login
        </Button>
        <Button type="submit" className = {classes.signUp}>sign up</Button>
      </div>
    </header>
  );
};

export default Header;
