import { Link } from "react-router-dom";
import { Note } from "../App";
import NoteCard from "../components/NoteCard";
import "../assets/home.css"

type HomeProps = {
  notes: Note[]
}

export default function Home({notes}: HomeProps) {
  return (
    <div>
      <div className="header">
        <h1 className="header_heading">Note App</h1>
        <Link to="new"><button className="header_new-btn">New</button></Link>
        <button className="header_edit-btn">Edit</button>
      </div>
      <div className="note-card_container">
        {notes.map(note => (
          <NoteCard key={note.id} {...note} />
        ))}
      </div>
    </div>
    
  )
}
