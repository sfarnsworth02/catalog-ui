import React from 'react';
import './App.css';
import NavList from './components/navigation/Navigation.js'
import NewNote from './components/main-pages/Notes.Crud.js';
import NoteList from './components/main-pages/Notes.List.js';


function App() {
  return (
    <div className="App">
      <header>
        <div className='main-content'>
          <h1>Class Notes Catalog</h1>
          <h3>Better understanding the MERN stack</h3>
          <p>View notes by category</p>
        </div>
        <NavList className='nav-list' />
      </header>
      <body>
        <div className='crud-note'>
          <NewNote />
        </div>
        <div className='list-note'>
          <NoteList />
        </div>
      </body>
    </div>
  );
}

export default App;
