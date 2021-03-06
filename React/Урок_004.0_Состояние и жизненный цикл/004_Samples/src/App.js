import React from 'react';
import './App.css';
import { ClickCounter } from './components/ClickCounter';
import { List } from './components/List';
import { Clock } from './components/Clock';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers: [1,2,3,4,5]
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
          <ClickCounter />
          <List items={this.state.numbers} />
          <List items={this.state.numbers} />
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
}

export default App;
