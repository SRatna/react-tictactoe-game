import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    winner: null
  };
  render() {
    const { winner } = this.state;
    return (
      <div>
        <div className="header">
          <span>Team O</span>
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
