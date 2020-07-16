import React, {Component as RC} from 'react';

export default class NewNote extends RC
{
    constructor()
    {
        super();
        this.state = {
            action: '',
        }
    }
    render()
    {
        return(
        <div>
            <form className='concept-data-form'>
                <div>
                    <label>Concept</label>
                    {/* required */}
                    <input />
                </div>
                <div>
                    <label>Language</label>
                    {/* required */}
                    <input />
                </div>
                <div>
                    <label>Official Documentation Link</label>
                    <input />
                </div> 
                <input type='submit' value='Create' />
            </form> 
            <form className='concept-tag-data-form'>
                <div>
                    <label>Reference Name</label>
                    <input />
                </div>
                <div>
                    <label>Reference Link</label>
                    <input />
                </div>
                <input type='submit' value='Add' />
            </form> 
            <form className='note-data-form'>
                <div>
                    <label>Entry name:</label>
                    {/* required */}
                    <input />
                </div>
                <div>
                    <label>Question:</label>
                    {/* required */}
                    <input />
                </div>
                <div>
                    <label>Answer</label>
                    <input />
                </div> 
                <input type='submit' value='Create' />
                <input type='submit' value='Add' />
            </form>
        </div>
        )
    }
}