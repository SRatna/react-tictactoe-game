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

  toggleTeam = () => this.state.currentTeam === 'O'
    ? this.setState({ currentTeam: 'X' })
    : this.setState({ currentTeam: 'O' });

  updateGameState = (i, j) => {
    const { currentTeam, gameState } = this.state;
    gameState[i][j] = currentTeam;
    this.setState({ gameState });
  };

  checkForWinnerInColumns = (gameState, team) =>
  (gameState[0][0] === team && gameState[1][0] === team && gameState[2][0] === team)
  || (gameState[0][1] === team && gameState[1][1] === team &&  gameState[2][1] === team)
  || (gameState[0][2] === team && gameState[1][2] === team && gameState[2][2] === team);

  checkForWinnerInRows = (gameState, team) =>
  (gameState[0][0] === team && gameState[0][1] === team && gameState[0][2] === team)
  || (gameState[1][0] === team && gameState[1][1] === team && gameState[1][2] === team)
  || (gameState[2][0] === team && gameState[2][1] === team && gameState[2][2] === team);

  checkForWinnerInDiagonals = (gameState, team) =>
  (gameState[0][0] === team && gameState[1][1] === team && gameState[2][2] === team)
  || (gameState[0][2] === team && gameState[1][1] === team && gameState[2][0] === team);

  checkForWinner = () => {
    const { gameState, currentTeam } = this.state;
    if (this.checkForWinnerInRows(gameState, currentTeam)
    || this.checkForWinnerInColumns(gameState, currentTeam)
    || this.checkForWinnerInDiagonals(gameState, currentTeam)) {
      this.setState({ winner: currentTeam });
    } else {
      this.toggleTeam();
    }
  };

  handlePlayItemClick = (i, j) => {
    const { gameState } = this.state;
    if (this.isOorX(gameState[i][j])) return;
    this.updateGameState(i, j);
    this.checkForWinner();
  };

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
                <span
                  onClick={() => this.handlePlayItemClick(i, j)}
                  key={j}>
                  {this.isOorX(cur) ? cur : '$'}
                </span>
              );
            })
          })}
        </div>
        {winner && (
          <div className="winner">
            <div className="content">
              <span>Team {winner} won</span>
              <button
                onClick={() => this.setState({
                  winner: null,
                  currentTeam: 'O',
                  gameState: [
                    ['a', 'b', 'c'],
                    ['d', 'e', 'f'],
                    ['g', 'h', 'i']
                  ]
                })}>
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
