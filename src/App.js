import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTries: [],
      currentTry: 0,
    };
  }

  render() {
    const { allTries, currentTry } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          All tries: {JSON.stringify(allTries)}<br />
          Current try: {currentTry + 1}<br />
        </header>
      </div>
    );
  }
}

export default App;
