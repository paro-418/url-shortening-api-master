import classes from "./Header.module.css";
import logo from "../../images/logo.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.navContainer}>
        <img src={logo} />
        <nav className={classes.nav}>
          <ul className={classes.ul}>
            <li className={classes.li}>feature</li>
            <li className={classes.li}>pricing</li>
            <li className={classes.li}>resources</li>
          </ul>
        </nav>
      </div>
      <div className={classes.btnContainer}>
        <Button type="submit" className={classes.login}>
          login
        </Button>
        <Button type="submit" className={classes.signUp}>
          sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
