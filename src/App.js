import React, { Component } from 'react';
import './App.css';

const possiblePinsToRoll = [1,2,3,4,5,6,7,8,9,10];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTries: [],
      currentTry: 0,
    };
  }

  isTryInValid = (allTries, currentTry, pins) =>
    (currentTry - 1) % 2 === 0 && allTries[currentTry - 1] + pins > 10;

  roll = (pins) => {
    const { allTries, currentTry } = this.state;
    if(!this.isTryInValid(allTries, currentTry, pins)) {
      const isStrike = pins === 10;
      this.setState({
        allTries: isStrike ? [...allTries, pins, 0] : [...allTries, pins],
        currentTry: isStrike ? currentTry + 2 :  currentTry + 1,
      })
    }
  }

  getScoreForStrike = (allTries, currentIndex) => {
    const hasPlayedAfterStrike = typeof allTries[currentIndex + 3] !== 'undefined';
    if(hasPlayedAfterStrike){
      return allTries[currentIndex] + allTries[currentIndex + 2] + allTries[currentIndex + 3];
    }
    return allTries[currentIndex];
  }

  getScoreForSpare = (allTries, currentIndex) => {
    const hasPlayedAfterSpare = typeof allTries[currentIndex + 2] !== 'undefined';
    if(hasPlayedAfterSpare){
      return allTries[currentIndex] + allTries[currentIndex + 1] + allTries[currentIndex + 2];
    }
    return allTries[currentIndex] + allTries[currentIndex + 1];
  }

  getScoreForFrame = (frameNumber) => {
    const currentIndex = frameNumber * 2;
    const { allTries } = this.state;
    const isStrike = allTries[currentIndex] === 10;
    const isSpare = allTries[currentIndex] + allTries[currentIndex + 1] === 10;

    if(isStrike){
      return this.getScoreForStrike(allTries, currentIndex);
    } else if(isSpare){
      return this.getScoreForSpare(allTries, currentIndex);
    } else {
      return allTries[currentIndex] + allTries[currentIndex + 1];
    }
  }
  
  score = () => {
    const { currentTry } = this.state;
    let currentScore = 0;
    for (let currentIndex = 0; currentIndex < 10; currentIndex++) {
      if(currentTry > currentIndex * 2) {
        currentScore = currentScore + this.getScoreForFrame(currentIndex);
      }
    }
    return currentScore;
  }

  render() {
    const { allTries, currentTry } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          All tries: {JSON.stringify(allTries)}<br />
          Current try: {currentTry + 1}<br />
          Score: {this.score()}<br />
          {possiblePinsToRoll.map(
            (possiblePin) =>
              <button
                key={possiblePin}
                onClick={() => this.roll(possiblePin)}
            >
              {possiblePin}
            </button>
          )}
        </header>
      </div>
    );
  }
}

export default App;
