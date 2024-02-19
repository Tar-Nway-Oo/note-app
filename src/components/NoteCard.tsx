import { Link } from "react-router-dom"
import { Note } from "../App"
import deleteIcon from "../assets/icons/cross-circle-svgrepo-com.svg"
import "../assets/css/home.css"

type NoteCardProps = {
  editIsOpen: boolean
  deleteNote: (id: string) => void
} & Note

export default function NoteCard({id, title, editIsOpen, deleteNote}: NoteCardProps) {
  return (
    <div className={`note-card ${editIsOpen ? "note-card_active" : ""}`}>
      { editIsOpen &&
        <img src={deleteIcon} alt="delete-icon" className="delete-icon"
          onClick={(e) => {
          e.stopPropagation()
          deleteNote(id)
        }} />
      }
      <Link to={id} className={`note-card_link ${editIsOpen ? "disabled-link" : ""}`}>
           <p className="note-card_title">{title}</p>
      </Link>
    </div>
  )
}
