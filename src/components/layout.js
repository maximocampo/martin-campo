/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useState, useEffect} from "react"
import Header from "./header"
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    marginBottom: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    height: 40,
    width: '100%',
    backgroundColor: 'black',
    '& p': {
      cursor: 'pointer',
      margin: 12,
      fontSize: 12,
      '&:hover': {
        color: 'red'
      },
    }
  },
  row: {
    display: 'flex',
  },
  footer: {
    color: 'black',
    position: 'fixed',
    bottom: 0,
    height: 20,
    width: '100%',
    borderTop: '1px black solid',
    backgroundColor: 'white',
    '& p': {
      margin: 4,
      fontSize: 12
    }
  }
});

const Layout = ({children}) => {
  const [yOffset, setYoffset] = useState(0);
  const classes = useStyles();
  
  useEffect(() => {
    const handleScroll = () => setYoffset(window.pageYOffset)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  return (
    <div className={classes.container}>
      <div className={classes.header} style={{opacity: yOffset > 460 ? 1 : 0, transition: '0.2s'}}>
        <div>
          <p>MARTIN CAMPO</p>
        </div>
        <div className={classes.row}>
          <p>CONTACT</p>
          <p>PROJECTS</p>
          <p>ABOUT</p>
        </div>
      </div>
      <Header siteTitle="Martin Campo"/>
      <main>{children}</main>
      {/*<footer className={classes.footer}>
        <p>BACK TO TOP</p>
      </footer>*/}
    </div>
  )
};

export default Layout