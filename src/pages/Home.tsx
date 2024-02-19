import { Link } from "react-router-dom";
import { Note } from "../App";
import NoteCard from "../components/NoteCard";
import "../assets/css/home.css"
import { useState } from "react";

type HomeProps = {
  notes: Note[]
  deleteNote: (id: string) => void
}

export default function Home({notes, deleteNote}: HomeProps) {

  const [editIsOpen, setEditIsOpen] = useState(false);

  return (
    <div>
      <div className="header">
        <h1 className="header_heading">Note App</h1>
        <Link to="new"><button className="header_new-btn">New</button></Link>
        <button className="header_edit-btn" onClick={() => setEditIsOpen(prev => !prev)}>{editIsOpen ? "Unedit" : "Edit"}</button>
      </div>
      { notes.length > 0 ?
         <div className="note-card_container">
           {notes.map(note => (
             <NoteCard key={note.id} {...note} editIsOpen={editIsOpen} deleteNote={deleteNote} />
           ))}
         </div> :
         <p className="not-found">No Note Found !</p>
      }
    </div>
    
  )
}
