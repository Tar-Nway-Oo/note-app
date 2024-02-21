import { Link } from "react-router-dom";
import { Note } from "../App";
import NoteCard from "../components/NoteCard";
import "../assets/css/home.css"

type HomeProps = {
  notes: Note[]
  deleteNotes: () => void
}

export default function Home({notes, deleteNotes}: HomeProps) {

  return (
    <div>
      <div className="header">
        <h1 className="header_heading">Note App</h1>
        <Link to="new"><button className="header_new-btn">New</button></Link>
        <button className="header_delete-btn" onClick={deleteNotes}>Delete All</button>
      </div>
      { notes.length > 0 ?
         <div className="note-card_container">
           {notes.map(note => (
             <NoteCard key={note.id} {...note} />
           ))}
         </div> :
         <p className="not-found">No Note Found !</p>
      }
    </div>
    
  )
}
