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
  isOorX = letter => letter === 'O' || letter === 'X';
  render() {
    const { winner, currentTeam, gameState } = this.state;
    return (
      <div>
        <div className="header">
          <span>Team {currentTeam}</span>
        </div>
        <div className="playground">
          {[0, 1, 2].map(i => {
            return [0, 1, 2].map(j => {
              const cur = gameState[i][j];
              return (
                <span key={j}>
                  {this.isOorX(cur) ? cur : '$'}
                  </span>
              );
            })
          })}
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
