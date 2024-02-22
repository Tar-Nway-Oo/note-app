import { Link, useOutletContext } from "react-router-dom"
import { Note } from "../App";
import "../assets/css/detail.css"

type NoteDetailProps = {
  deleteNote: (id: string) => void
}

export default function NoteDetail({deleteNote}: NoteDetailProps) {

  const {id, title, body}: Note= useOutletContext();

  return (
    <div className="note-detail">
      <div className="note-detail_header">
        <p className="note-detail_title">{title}</p>
        <div>
          <Link to="edit"><button className="note-detail_edit-btn">Edit</button></Link>
          <button className="note-detail_delete-btn" onClick={() => deleteNote(id)}>Delete</button>
          <Link to="/"><button className="note-detail_back-btn">Back</button></Link>
        </div>
      </div>
      <p className="note-detail_body"><span style={{marginLeft: "1em"}}></span>{body}</p>
    </div>
  )
}
