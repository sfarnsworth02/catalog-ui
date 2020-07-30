import React, { Component as RC } from 'react';
import NoteForm from '../form/Notes.Form';
import {  
    route
    /* 
    handleChange, updateItem, createNote, deleteNote, filterNotes
     */
} from '../crud/Notes.Crud';

/* display list item from here 
   tried and couldn't get the id to pull down 
    TODO: move the ul/li from getNotes into a function 
*/

export function DisplayNoteForm(props)
{
    let edit = props.edit;
    if(!edit)
    {
        return <NoteForm  action='Create'/>
    }
    return (<span>Update item:</span>)
    // this is not working
    //return <NoteForm key={props.id} id={props.id} {...props.thisNote} edit='true' action='Update' getNotes={this.getNotes} />
}


export default class NotesList extends RC 
{
    constructor()
    {
        super();
        this.state = {
            allNotes: [], // an array of the elements
            notes: [], // array of actual notes data
            edit: null,
            newNote: true,
            message: '',
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
            // console.log('data response: ', data)
            this.setState({
                notes: data,
                allNotes: data.map((note, i) =>
                {
                    return  (<ul><li 
                        key={note._id}
                        id={note._id}
                        onClick={this.updateNote}>
                        {note.label}<br/>{note.question} 
                        <input type='submit' value='Delete' id={note._id} onClick={this.deleteNote} />
                    </li><hr/></ul>)
                }),
            })
        })
    }

 
    updateNote = (e) =>
    {
        const id = e.target.getAttribute('id');
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
        // console.log('this note: ', thisNote);
        this.setState({
            edit: null
        },
        function()
        {
            this.setState({
                edit: <NoteForm key={id} id={id} {...thisNote} edit='true' action='Update' getNotes={this.getNotes} />,
                // this is not working
                // edit: <DisplayNoteForm key={id} id={id} {...thisNote} edit='true' action='Update' getNotes={this.getNotes} />,
                newNote: false
            })
        });
        return;
    }

    deleteNote = (e) =>
    {
        e.preventDefault();
        const id = e.target.getAttribute('id');
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
        let vpRoute = `${route}/notes/${id}`;
        let fetchOptions = {
            headers: {'Content-Type': 'application/json'},
            method: 'DELETE',
            body: JSON.stringify(thisNote),
        }
        fetch(vpRoute,fetchOptions)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log('fetch result: ', result);
            this.setState({
                message: result.message,
            })
            this.getNotes();
        })
    }

    componentDidMount()
    {
        this.getNotes();
    }

    render()
    {
        return(
        <div>
            <div className='crud-note'>
                {/* <NoteForm
                getNotes={this.getNotes} /> */}
                <DisplayNoteForm edit={this.state.edit} msg={this.state.message}/>
                {this.state.edit}
            </div>
            <div className='list-note'>
                <h4>Note Topic & Question</h4>
                {this.state.allNotes}
            </div>
        </div>
        
        )
    }
}