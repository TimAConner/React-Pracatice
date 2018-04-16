'use strict';
import React, { Component } from 'react';
import './NoteForm.css';
import PropTypes from 'prop-types';

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newNoteContent: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  // Sets new note content to value from input box.
  handleUserInput(event) {

    // When handleUserInput is not bound in the constructor, this is undefined.
    // console.log(this.state.newNoteContent);
    this.setState({
      newNoteContent: event.target.value,
    });
  }

  writeNote() {
    this.props.addNote(this.state.newNoteContent);
    this.setState({
      newNoteContent: '',
    });
  }

  render() {
    return (
      <div className='formWrapper'>
        <input
          className='noteInput'
          placeholder='Note...'
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
          onKeyPress={event => {
            if(event.key === "Enter"){
              this.writeNote();
            }
          }}
        />
        
        <button
          className='noteButton'
          onClick={this.writeNote}
        >Add Note</button>
      </div>
    );
  }
}

export default NoteForm;