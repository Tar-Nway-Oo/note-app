import NoteForm from "../components/NoteForm"
import { NoteData } from "../App"
import "../assets/css/new.css"

type NewNoteProps = {
  createNote: (data: NoteData) => void
}

export default function NewNote({createNote}: NewNoteProps) {

  return (
    <div>
      <NoteForm createNote={createNote} />
    </div>
  )
}
