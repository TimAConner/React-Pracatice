'use strict';
import React, { Component } from 'react';

import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm'

import firebase from 'firebase/app';
import { DB_CONFIG } from './Config/Config';
import 'firebase/database';

class App extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('reactNotes');
    console.log('this.database', this.database);

    // The current state of our component
    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    this.database.on('child_added', snap => {
      
      previousNotes.push({ 
        id: snap.key,
        content: snap.val().content,
      });
      
      this.setState({
        notes: previousNotes,
      });
    });

  }

  addNote(note) {
    this.database.push().set({ content: note });
  }

  render() {
    return (
      <div className='notesWrapper'>
        <div className='notesHeader'>
          <h1 className='heading'>React & Firebase Todo</h1>

        </div>
        <div className='notesBody'>
          {
            this.state.notes.map((note) => {
              return (
                <Note
                  content={note.content}
                  id={note.id}
                  key={note.id}
                />
              );
            })
          }
        </div>
        <div className='noteFooter'>
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
