import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Announcement from './Announcement';
import ResetButton from './ResetButton';
import Tile from './Tile';


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
    }
  }

  updateBoard(loc, player) {

  }

  render() {
    return (
      <div className='container'>
        <div className='menu'>
          <h1>Tic-Tac-Toe</h1>
          <Announcement />
          <ResetButton />
        </div>
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
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
