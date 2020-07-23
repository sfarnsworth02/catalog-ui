import React from 'react';
import './App.css';
import NavList from './components/navigation/Navigation.js';
import NoteList from './components/main-pages/Notes.js';


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
      <section>
        <NoteList />
      </section>
    </div>
  );
}

export default App;
