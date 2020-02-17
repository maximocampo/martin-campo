import React from "react";
import { createUseStyles } from "react-jss";
import backgroundImg from '../../assets/images/header_img.jpg'

const useStyles = createUseStyles({
  header: {
    height: '100vh',
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
    '& h1': {
      fontSize: 86,
      color: 'red',
    }
  },
  h1Container: {
    width: 410,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  wireframe: {
    backgroundColor: 'lightgray'
  }
});

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <img className={[classes.backgroundImage, classes.wireframe].join(' ')} />
      <div className={classes.h1Container}>
        <h1>MART-<br/>IN CAM<br/>PO</h1>
      </div>
    </header>
  );
};

export default Header;
