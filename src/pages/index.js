import React from "react";
import './styles.css'
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  container: {
  	width: '100%',
  	height: '100%',
    margin: 100
  }
});

const App = ({children}) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1>Martín Campo</h1>
    </div>
  )
}

export default App
