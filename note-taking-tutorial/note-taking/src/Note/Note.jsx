'use strict';
import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {

  // Super will pass props to the parent class. 
  // What is the parent class? Why does it need the note's props? 
  constructor(props) {
    super(props);
    this.content = props.content;
    this.id = props.id;
  }

  render(props) {
    return (
      <div className='note fade-in'>
        <h2>{this.id}</h2>
        <p>{this.content}</p>
      </div>
    );
  }
}

Note.propTypes = {
  noteContent: PropTypes.string,
}

export default Note;