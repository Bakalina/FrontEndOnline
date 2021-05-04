import React from 'react';
import './App.css';
import { ClickCounter } from './components/ClickCounter';
import { List } from './components/List';

const numbers = [1,2,3,4,5];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter />
        <List items={numbers} />
        <List items={numbers} />
        <p>
          Hello World !!!
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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
