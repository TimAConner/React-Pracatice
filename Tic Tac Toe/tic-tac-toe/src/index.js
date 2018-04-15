import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Announcement from './Announcement';
import ResetButton from './ResetButton';
import Tile from './Tile';
import './GameBoard.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ',
      ],
      turn: 'x',
      winner: null,
    }
  }

  updateBoard(loc, player) {

    // Invalid move
    if (this.state.gameBoard[loc] === 'x' || this.state.gameBoard[loc] === 'o') {
      return;
    }


    /*
      Update Game board 
    */
    const currentGameBoard = this.state.gameBoard;
    currentGameBoard[loc] = player;

    this.setState({ gameBoard: currentGameBoard });

    const gameBoardString = this.state.gameBoard.join('');

    /* 
      Check for victory or draw 
    */
    const topRowMatch = /(xxx|ooo).{6}/,
      bottomRowMatch = /.{6}(xxx|ooo)/,
      middleRow = /.{3}(xxx|ooo).{3}/,
      leftDiagonalMatch = /(x|o){1}.{3}(\1){1}.{3}(\1){1}/,
      rightDiagonalMatch = /.{2}(x|o){1}.{1}(\1){1}.{1}(\1){1}.{2}/,
      leftColumnMatch = /(x|o){1}.{2}(\1){1}.{2}(\1){1}.{2}/,
      rightColumnMatch = /.{2}(x|o){1}.{2}(\1){1}.{2}(\1){1}/;

    if (gameBoardString.match(topRowMatch) ||
      gameBoardString.match(bottomRowMatch) ||
      gameBoardString.match(middleRow) ||
      gameBoardString.match(leftDiagonalMatch) ||
      gameBoardString.match(rightDiagonalMatch) ||
      gameBoardString.match(leftColumnMatch) ||
      gameBoardString.match(rightColumnMatch)) {
      this.setState({ winner: this.state.turn });
      return;
    }

    // If only x and o , and previous matches didn't return, then it's a draw.
    const drawMatch = /(x|o){9}/;
    if (gameBoardString.match(drawMatch)) {
      this.setState({ winner: 'd' });
    }

    if(this.props.winner === 'd'){
      return 'Draw';
    }
    if(this.props.winner === 'x'){
      return 'X';
    }
    if(this.props.winner === 'o'){
      return 'o';
    }
    
    /* 
      Switch players turn
    */
    this.setState({ turn: (this.state.turn === 'x') ? 'o' : 'x' });
  }

  resetBoard() {

    //TODO: Can you recall constructor instead of having duplicate code?
    this.setState({
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ',
      ],
      turn: 'x',
      winner: null,
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='menu'>
          <h1>Tic-Tac-Toe</h1>
          <Announcement winner={this.state.winner} />
          <ResetButton resetBoard={this.resetBoard.bind(this)} />
        </div>
        <div className="game-board">
          {this.state.gameBoard.map(function (value, i) {
            return (
              <Tile
                key={i}
                loc={i}
                value={value}
                updateBoard={this.updateBoard.bind(this)}
                turn={this.state.turn} />
            );
          }.bind(this))}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
