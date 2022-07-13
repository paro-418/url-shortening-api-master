import classes from "./Footer.module.css";
import logo from "../../images/logo.svg";
import insta from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import facebook from "../../images/icon-facebook.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <img src={logo} />
      </div>
      <nav>
        <div>
          <h3>features</h3>
          <ul>
            <li>Link shortening</li>
            <li>Branded Links</li>
            <li>Analysis</li>
          </ul>
        </div>
        <div>
          <h3>resources</h3>
          <ul>
            <li>blog</li>
            <li> Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3>company</h3>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <div className={classes.socials}>
        <img src={insta} />
        <img src={twitter} />
        <img src={pinterest} />
        <img src={facebook} />
      </div>
    </footer>
  );
};

export default Footer;
