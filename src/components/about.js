import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  aboutContainer: {
    padding: 20,
    '& p': {
      fontSize: 18,
      lineHeight: 1.6,
      margin: 0
    }
  }
});

const About = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.aboutContainer}>{children}</div>;
};

export default About;
