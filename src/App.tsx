import { Routes, Route, useNavigate } from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import Home from "./pages/Home"
import NewNote from "./pages/NewNote"
import NoteLayout from "./pages/NoteLayout"
import NoteDetail from "./pages/NoteDetail"
import EditNote from "./pages/EditNote"
import { useLocalStorage } from "./hooks/useLocalStorage"

export type Note = {
  id: string
} & NoteData

export type NoteData = {
  title: string
  body: string
}

export default function App() {

  const [notes, setNotes] = useLocalStorage<Note[]>("NOTES", []);

  const navigate = useNavigate();

  function createNote({title, body}: NoteData) {
     setNotes(prevNotes => ([...prevNotes, {id: uuidV4(), title: title, body: body}]));
     navigate("/");
  }

  function deleteNotes() {
    setNotes([]);
  }

  function deleteNote(id: string) {
    setNotes(prevNotes => (prevNotes.filter(note => note.id !== id)));
    navigate("/");
  }

  function editNote(id: string, {title, body}: NoteData) {
    setNotes(prevNotes => (prevNotes.map(note => {
      if (note.id === id) {
        return {...note, title: title, body: body}
      } else {
        return note
      }
    })));
  }

  return (
    <Routes>
      <Route path="/">
         <Route index element={<Home notes={notes} deleteNotes={deleteNotes} />} />
         <Route path=":id" element={<NoteLayout notes={notes} />}>
           <Route index element={<NoteDetail deleteNote={deleteNote}/>} />
           <Route path="edit" element={<EditNote editNote={editNote} />} />
         </Route>
         <Route path="new" element={<NewNote createNote={createNote} />} />
      </Route>
    </Routes>
  )
}
