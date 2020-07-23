import React from 'react';


/*
I would like to eventually house all of the crud apps here in one spot and 
call them from any file. I'll play around with that after I have a functioning crud app 
 
   { route, handleChange, updateItem, createNote, deleteNote, filterNotes, }
*/


export let route = 'http://localhost:5007'

export function updateItem(props) 
{
    return(<div>update an item here</div>)
}

export function createNote(props)
{
    return(<div>create a new note here</div>)
}