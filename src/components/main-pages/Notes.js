import React, { Component as RC } from 'react';
import NewNote from '../form/Notes.Form';
import { 
    /* 
    handleChange, updateItem, createNote, deleteNote, filterNotes
     */
} from '../crud/Notes.Crud';

// display list item from here

export default class NotesList extends RC 
{
    constructor()
    {
        super();
        this.state = {
            allNotes: [],
        }
    }

    // add map function with fetch to display all unanswered notes
    getNotes = () =>
    {
    
        fetch('http://localhost:5007/notes')
        .then((response) =>
        {
            return response.json()
        })
        .then((data) =>
        {
            // if( !data )
            //     { console.log('Error with returned data: ', data)};
            this.setState({
                allNotes: data.map((note) =>
                {
                    return <li
                        key={note._id}
                        id={note._id}><span className='note-topic'>{note.label}</span> | <span className='note-question'>{note.question}</span><hr/></li>
                }),
            })
        })
    }

    // call map function from component did mount for initial display
    componentDidMount()
    {
        this.getNotes();
    }

    render()
    {
        return(
        <div>
            <div className='crud-note'>
                <NewNote />
            </div>
            <div className='list-note'>
                <h4>Note Topic & Question</h4>
                <ul>
                    {this.state.allNotes}
                </ul>
            </div>
        </div>
        
        )
    }
}