import React from 'react';
import logo from './logo.svg';
import modules from './App.module.css';

function App() {
  return (
    <div className={modules.App}>
      <header className={modules.AppHeader}>
        <img src={logo} className={modules.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={modules.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
