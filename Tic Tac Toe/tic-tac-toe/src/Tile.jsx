import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {
  tileClick(props) {
    props.updateBoard(props.loc, props.turn);
  }
  render() {
    return (
      <div className={"tile " + this.props.loc} onClick={() => this.tileClick(this.props)}>
        <span>{this.props.value}</span>
      </div>
    )
  }
}