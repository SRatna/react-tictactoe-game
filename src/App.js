import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    winner: null,
    currentTeam: 'O',
    gameState: [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ]
  };
  render() {
    const { winner, currentTeam } = this.state;
    return (
      <div>
        <div className="header">
          <span>Team {currentTeam}</span>
        </div>
        <div className="playground">
          <span>$</span>
          <span>$</span>
          <span>$</span>
          <span>$</span>
          <span>$</span>
          <span>$</span>
          <span>$</span>
          <span>$</span>
          <span>$</span>
        </div>
        {winner && (
          <div className="winner">
            <span>Team {winner} won</span>
            <button>Play Again</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
