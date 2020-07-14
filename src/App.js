import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Header from './Common/Header';
import Footer from './Common/Footer';

import About from './About/About';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';

function App() {
  return (
    <div style={styles.container}>
      <Header/>
      <div style={styles.body}>
        <Switch>
        <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <About/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    flex: '1 1 auto',
  }
}

export default App;
