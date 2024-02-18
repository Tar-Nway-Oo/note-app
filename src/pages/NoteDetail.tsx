import { useParams } from "react-router-dom"
import { Note } from "../App";
import "../assets/detail.css"

type NoteDetailProps = {
   notes: Note[]
}

export default function NoteDetail({notes}: NoteDetailProps) {

   const {id} = useParams();

  const selectedNote = notes.find(note => note.id === id);

  if (selectedNote == null) return;

  const {title, body} = selectedNote;
   
  return (
    <div className="note-detail">
      <p className="note-detail_title">{title}</p>
      <p className="note-detail_body"><span style={{marginLeft: "1em"}}></span>{body}</p>
    </div>
  )
}
