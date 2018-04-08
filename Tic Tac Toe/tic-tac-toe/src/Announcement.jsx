import React, { Component } from 'react';
import './Announcement.css'

export default class Announcement extends Component {
  render() {
    return (
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>Game Over</h2>

        <h3>Winner: {this.props.winner === 'd' ? 'Draw' : (this.props.winner === 'x' ? 'X' : 'O')}</h3>
      </div>
    )
  }
} 