import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Header from './Common/Header';
import Footer from './Common/Footer';

import About from './About/About';

function App() {
  return (
    <div style={styles.container}>
      <Header/>
      <body style={styles.body}>
        <Switch>
          <Route path="/">
            <About/>
          </Route>
        </Switch>
      </body>
      <Footer/>
    </div>
  );
}

let styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    minHeight: '67vh'
  }
}

export default App;
