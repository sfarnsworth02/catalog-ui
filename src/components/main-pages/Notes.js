import React, { Component as RC } from 'react';
import NoteForm from '../form/Notes.Form';
import {  
    route
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
            allNotes: [], // an array of the elements
            notes: [], // array of actual notes data
            edit: ''
        }
    }

    // add map function with fetch to display all unanswered notes
    getNotes = () =>
    {
        fetch(`${route}/notes`)  
        .then((response) =>
        {
            return response.json();
        })
        .then((data) =>
        {
            console.log('data response: ', data)
            this.setState({
                notes: data,
                allNotes: data.map((note, i) =>
                {
                    return <li
                        key={note._id}
                        id={note._id}
                        onClick={this.updateNote}
                        ><span>{note.label}</span><br/><span>{note.question}</span> <hr/>
                        </li>
                }),
            })
        })
    }
    updateNote = (e) =>
    {
        const id = e.target.getAttribute('id');
        console.log('id: ', id);
        const stupidFind = (id) =>
        {
            for (let i=0; i<this.state.notes.length; i++)
            {
                let note = this.state.notes[i];
                if (note._id === id)
                {
                    return note;
                }
            }
            return null;
        }
        let thisNote = stupidFind(id);
        console.log('this note: ', thisNote);
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
                <NoteForm
                getNotes={this.getNotes} />
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