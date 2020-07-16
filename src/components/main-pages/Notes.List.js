import React, { Component as RC } from 'react';

export default class NotesList extends RC 
{
    constructor()
    {
        super();
        this.state = {
            allNotes: [],
        }
    }

    render()
    {
        return(<p>List goes here</p>)
    }
}