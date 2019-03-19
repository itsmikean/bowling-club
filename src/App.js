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

  roll = (pins) => {
    const { allTries, currentTry } = this.state;
    const isStrike = pins === 10;
    this.setState({
      allTries: isStrike ? [...allTries, pins, 0] : [...allTries, pins],
      currentTry: isStrike ? currentTry + 2 :  currentTry + 1,
    })
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
