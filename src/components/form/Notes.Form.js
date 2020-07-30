import React, {Component as RC} from 'react';
import { route } from '../crud/Notes.Crud'

export default class NewNote extends RC
{
    constructor(props)
    {
        super(props);
        this.state = {
            edit: props.edit, 
            id: props.id,
            label: props.label,
            tag: props.tag,
            question: props.question,
            answer: props.answer,
            isAnswered: props.isAnswered,
            action: props.action,
        }
    }

    handleSubmit = (e) =>
    {
       e.preventDefault();
       let id = this.props.id;
       let http = "POST";
       if (this.props.action === 'Update') 
       {
           http ='PUT';
       } else if (this.props.action === 'Delete')
       {
           http = 'DELETE'
       }
       let vpRoute = `${route}/notes/`;

       if (http === 'PUT' || http === 'DELETE') {;
            console.log('alright it made it to verify the route id: ', vpRoute);
            vpRoute = `${vpRoute}${id}`;
       }
       console.log('Whats my action? ', this.props.action);
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
           console.log('this result? ', result)
            this.props.getNotes();  //my fetch works but there is an error that pops saying this isn't a function   
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
       .catch((err) =>
       {
           return console.log('There was an error somewhere in your handleSubmit', err)
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
        return(
        <div>
            <form className='note-data-form' onSubmit={this.handleSubmit}>
                <span>
                    <label> Concept: </label>
                    {/* required */}
                    <input
                        value={this.state.label}
                        name='label'
                        onChange={this.handleChange}
                     />
                </span>
                <span>
                    <label> Language Base: </label>
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
