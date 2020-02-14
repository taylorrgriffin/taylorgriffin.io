import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<h1>taylorgriffin.io</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Site in progress...
        </h3>
	<p>
	  In the meantime, feel free to check out my&nbsp;
        <a
          className="App-link"
          href="https://github.com/taylorrgriffin"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
	</p>
      </header>
    </div>
  );
}

export default App;
