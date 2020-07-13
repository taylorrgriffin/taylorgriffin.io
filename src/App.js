import React from 'react';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
        {/* <div> */}
          {/* <p>Hi!</p> */}
          {/* <p className="Paragraph">
            My name is Taylor Griffin, and I am a Software Engineer from Portland, Oregon.
            I currently work as a developer at the Oregon State University Center for Applied Systems and Software.
          </p> */}
          {/* <p className="Paragraph">
            In December 2020, I will be looking for full-time Software Engineering employment opportunities.
            Please add me on LinkedIn or GitHub if you are interested in connecting with me.
          </p> */}
      <Footer/>
    </div>
  );
}

export default App;
