import classes from "./BottomPart.module.css";
import Card from "../Card/Card";
import brandRec from "../../images/icon-brand-recognition.svg";
import detailedRec from "../../images/icon-detailed-records.svg";
import fullyCus from "../../images/icon-fully-customizable.svg";

const BottomPart = () => {
  return (
    <div className={classes.bottomPart}>
      <div className={classes.divHeader}>
        <h1 className={classes.H1}>Advanced statistics</h1>
        <p className={classes.description}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={classes.cardContainer}>
        <Card>
          <img className={classes.icon} src={brandRec} />
          <h2 className={classes.cardH2}>brand recognition</h2>
          <p className={classes.cardP}>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </Card>
        <Card className = {classes.card2}>
          <img className={classes.icon} src={detailedRec} />
          <h2 className={classes.cardH2}>brand recognition</h2>
          <p className={classes.cardP}>
            Gain isnights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </Card>
        <Card className = {classes.card3}>
          <img className={classes.icon} src={fullyCus} />
          <h2 className={classes.cardH2}>brand recognition</h2>
          <p className={classes.cardP}>
            Improve brand awareness and content discoverability through
            customizable links,, supercharging audiance engagement.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default BottomPart;
