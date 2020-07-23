import React, {Component as RC} from 'react';
import { route } from '../crud/Notes.Crud'

export default class NewNote extends RC
{
    constructor(props)
    {
        super(props);
        this.state = {
            edit: props.edit, 
            label: props.label,
            tag: props.tag,
            question: props.question,
            answer: props.answer,
            isAnswered: props.isAnswered
        }
    }

    handleSubmit = (e) =>
    {
       e.preventDefault();
       let id = this.props.id;
       let http = "POST";
       if (id) {
           http ='PUT'
           return http ;
       }
       let vpRoute = `${route}/notes`;
       if (id) {
            vpRoute = `${route}/notes/${id}`
       }
       console.log('id is: ', id);
       console.log('http method: ', http);
       console.log('vpRoute: ', vpRoute);
       const fetchOptions= {
           headers: { 'Content-Type': 'application/json' },
           method: `${http}`,
           body: JSON.stringify(this.state),
       }
       fetch(vpRoute, fetchOptions)
       .then((response) =>
       {
           return response.json();
       })
       .then((result) =>
       {
            this.props.getNotes();
       })
       .then((formData) =>
       {
           this.setState({
               label: '',
               tag: '',
               question: '',
               answer: '',
           })
       })
    }

    handleChange = (e) =>
    { 
        e.preventDefault();
        const key = e.target.getAttribute('name');
        const update = {};
        update[key] = e.target.value;
        this.setState(update);    
    }
    render()
    {
        // console.log('state of the task name: ', this.state)
        return(
        <div>
            <form className='note-data-form' onSubmit={this.handleSubmit}>
                <span>
                    <label> Name: </label>
                    {/* required */}
                    <input
                        value={this.state.label}
                        name='label'
                        onChange={this.handleChange}
                     />
                </span>
                <span>
                    <label> Tags: </label>
                    {/* required */}
                    <input
                        value={this.state.tag}
                        name='tag'
                        onChange={this.handleChange}
                     />
                </span>
                <span>
                    <label> Question: </label>
                    {/* required */}
                    <input
                        value={this.state.question}
                        name='question'
                        onChange={this.handleChange}
                     />
                </span>

                <span>
                    <label> Answer </label>
                    <input
                        value={this.state.answer}
                        name='answer'
                        onChange={this.handleChange}
                     />
                </span> 
                <input type='submit' value={this.props.action} />
            </form>
        </div>
        )
    }
}
