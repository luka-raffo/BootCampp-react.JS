import React from 'react';
import './App.css';
import {Note} from './note';
import { useEffect,useState } from 'react';




export default function App() {

    const[notes, setNotes] = useState([])
    const[newNotes, setNewNotes] = useState("Notes")

    useEffect (() => {
      console.log("useEffect");
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        setNotes(json)
            });
    } , [])

   //let variable = ""
   

   const handleChange = (event) => {
    setNewNotes(event.target.value);


  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Crear nota");

    const noteToAddToState =  {
      id: notes.length +1,
      title: newNotes,
      body: newNotes,
      important: Math.random() <0.5,

    }
    console.log(noteToAddToState);

    setNotes(notes.concat(noteToAddToState))
    setNewNotes("")

  }

    return (
    <div>
    <h1>Notes</h1>

      <ol>
        {notes.map(note => (
          <Note key={note.id} {...note} />
        ))}
      </ol>


        <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newNotes}   />
      <button >Crear nota</button>
        </form>
    </div>

    );
  }



