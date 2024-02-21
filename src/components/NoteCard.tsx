import { Link } from "react-router-dom"
import { Note } from "../App"
import "../assets/css/home.css"

export default function NoteCard({id, title}: Note) {
  return (
    <Link to={id} className="note-card">
        <p className="note-card_title">{title}</p>
    </Link>
  )
}
