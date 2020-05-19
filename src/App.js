import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons'

import logo from './logo.svg';
import './App.css';

const linkStyles = {
  fontSize: '30px',
  textDecoration: 'none',
  color: '#282c34',
}

const buttonStyles = {
  margin: '10px',
  padding: '8px',
  width: '300px',
  border: 'none',
  outline: 'none',
  borderRadius: '4px',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
	      <h1>taylorgriffin.io</h1>
      </header>
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo"/>
        <div>
          <p>Hi!</p>
          <p className="Paragraph">
            My name is Taylor Griffin, and I am a Software Engineer from Portland, Oregon.
            I currently study Computer Science Systems at Oregon State University, and work at at the OSU Center for Applied Systems and Software.
          </p>
          <p className="Paragraph">
            I am set to graduate university in June 2020, and am actively looking for full-time Software Engineering employment opportunities.
            Please add me on LinkedIn or GitHub if you are interested in connecting with me.
          </p>
        </div>
        <button style={buttonStyles}>
          <a style={linkStyles} href="https://github.com/taylorrgriffin">
            <FontAwesomeIcon icon={faGithub}/>
            &nbsp;&nbsp;&nbsp;taylorrgriffin
          </a>
        </button>
        <button style={buttonStyles}>
          <a style={linkStyles} href="https://linkedin.com/in/taylor-randolph-griffin">
            <FontAwesomeIcon icon={faLinkedin} />
            &nbsp;&nbsp;&nbsp;Taylor Griffin
          </a>
        </button>
      </body>
    </div>
  );
}

export default App;
