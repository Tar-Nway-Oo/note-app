import { Link } from "react-router-dom"
import { Note } from "../App"
import "../assets/home.css"

export default function NoteCard({id, title}: Note) {
  return (
      <Link to={id} style={{textDecoration: "none", color: "black", margin: 0, padding: 0}}>
         <div className="note-card">
           <p className="note-card_title">{title}</p>
         </div>
      </Link>
  )
}
