import React from "react";
import './styles.css'
import {createUseStyles} from 'react-jss';
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import Thumb from "../components/thumb";
import { lorem } from '../../extra'
import toba from '../../assets/images/header_img.jpg';
import mim from '../../assets/images/mim.jpg'

const useStyles = createUseStyles({
  container: {
    backgroundColor: 'red'
  }
});

const App = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="M©" />
      <About><p>{lorem}</p></About>
      
      <div style={{marginTop: 100}}>
        <Thumb
          client="XX"
          project="Kbj kb kjb kjbkjbkj"
          img={mim}
        />
        <Thumb
          client="TOBA"
          project="Asdf sdf f df"
          img={toba}
        />
        <Thumb
          client="XX"
          project="Fdfs afda fdfdsfdsaffdafafds"
        />
      </div>
      
    </Layout>
  )
}

export default App
