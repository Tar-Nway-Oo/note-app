import { Note } from "../App"
import "../assets/home.css"

export default function NoteCard({id, title, body}: Note) {
  return (
    <div className="note-card">
        <p>{title}</p>
    </div>
  )
}
