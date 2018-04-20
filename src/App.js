import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
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
        <div className="winner">
          <span>Team O won</span>
          <button>Play Again</button>
        </div>
      </div>
    );
  }
}

export default App;
