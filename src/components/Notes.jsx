import React, { useEffect, useState } from 'react';
import "./Notes.css"

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://lovely-red-magpie.cyclic.app/notes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setNotes(data);
      } else {
        setNotes([]); // If data is not an array, set notes as an empty array
      }
    })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h2>To see the notes</h2>
      {Array.isArray(notes) && notes.map(note => (
        <div key={note.id} className="note-box">
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  )
}
