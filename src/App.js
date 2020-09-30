import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './Common/Header';
import Footer from './Common/Footer';
import PageNotFound from './Common/404';

import About from './About/About';
import Resume from './Resume/Resume';

import Projects from './Projects/Projects';

import HALE from './Projects/HALE/Project';
import Journal from './Projects/Journal/Project';
import Beerbook from './Projects/Beerbook/Project';
import PythonAST from './Projects/Python-ast/Project';
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
    // TODO: figure out how to remove this without ruining Grid layout
    backgroundColor: '#000000'
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BB86FC'
    },
    secondary: {
      main: '#03DAC6'
    },
    primaryVariant: {
      main: '#3700B3'
    },
    error: {
      main: '#CF6679'
    },
    textPrimary: {
      main: '#FFFFFF'
    },
    textSecondary: {
      main: '#FFFFFF'
    }
  },
  typography: {
    h1: {
      color: '#FFFFFF'
    },
    h2: {
      color: '#FFFFFF',
    },
    h3: {
      color: '#FFFFFF'
    },
    h5: {
      color: '#FFFFFF'
    },
    h6: {
      color: '#FFFFFF',
    },
    body1: {
      color: '#FFFFFF',
      opacity: '60%'
    },
    body2: {
      color: '#FFFFFF',
      opacity: '83%'
    },
    body: {
      color: '#FFFFFF',
      padding: 0,
    }
  }
})

export default App;
