import { useNavigate, useOutletContext } from "react-router-dom";
import { Note, NoteData } from "../App";
import NoteForm from "../components/NoteForm"

type EditNoteProps = {
   editNote: (id: string, data: NoteData) => void
}

export default function EditNote({editNote}: EditNoteProps) {

   const selectedNote: Note= useOutletContext();

   const {id, title, body} = selectedNote;

  const navigate = useNavigate();
   
  return (
    <NoteForm 
      onSave={({title, body}) => {
        editNote(id, {title, body});
        navigate("..");
       }
      } 
      title={title} 
      body={body} 
    />
  )
}
