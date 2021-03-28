import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import theme from './styles/theme';
import { BACKGROUND } from './styles/colors';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './Common/Header';
import Footer from './Common/Footer';
import PageNotFound from './Common/404';

import About from './About/About';
import Resume from './Resume/Resume';

import Projects from './Projects/Projects';

import HALE from './Projects/HALE/Project';
import Blog from './Projects/Blog/Project';
import Journal from './Projects/Journal/Project';
import Beerbook from './Projects/Beerbook/Project';
import PythonAST from './Projects/Python-ast/Project';
// import Sentiments from './Projects/Sentiments/Project';
import TastyBeacon from './Projects/TastyBeacon/Project';
import Taylorgriffinio from './Projects/taylorgriffinio/Project';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={styles.container}>
        <Header/>
        <div style={styles.body}>
          <Switch>
            <Route path="/resume">
              <Resume/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/projects/HALE">
              <HALE/>
            </Route>
            <Route path="/projects/Beerbook">
              <Beerbook/>
            </Route>
            <Route path="/projects/taylorgriffinio">
              <Taylorgriffinio/>
            </Route>
            <Route path="/projects/journal">
              <Journal/>
            </Route>
            <Route path="/projects/python-ast">
              <PythonAST/>
            </Route>
            {/* <Route path="/projects/youtube-sentiments">
              <Sentiments/>
            </Route> */}
            <Route path="/projects/tastybeacon">
              <TastyBeacon/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/" exact={true}>
              <Redirect to="/about" />
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
    flexWrap: 'wrap'
  },
  body: {
    flex: 1,
    display: 'flex',
    backgroundColor: BACKGROUND
  }
}

export default App;
