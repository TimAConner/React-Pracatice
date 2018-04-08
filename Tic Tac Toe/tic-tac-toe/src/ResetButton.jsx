import React, { Component } from 'react';

export default class Tile extends Component {
  renter () {
    return (
      <div className=''>
        <button  onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}