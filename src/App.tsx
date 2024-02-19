import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import Home from "./pages/Home"
import NewNote from "./pages/NewNote"
import NoteDetail from "./pages/NoteDetail"

export type Note = {
  id: string
} & NoteData

export type NoteData = {
  title: string
  body: string
}

export default function App() {

  const [notes, setNotes] = useState<Note[]>([]);

  function createNote({title, body}: NoteData) {
     setNotes(prevNotes => ([...prevNotes, {id: uuidV4(), title: title, body: body}]))
  }

  function deleteNote(id: string) {
    setNotes(prevNotes => (prevNotes.filter(note => note.id !== id)))
  }

  return (
    <Routes>
      <Route path="/">
         <Route index element={<Home notes={notes} deleteNote={deleteNote} />} />
         <Route path=":id" element={<NoteDetail notes={notes} />} />
         <Route path="new" element={<NewNote createNote={createNote} />} />
      </Route>
    </Routes>
  )
}
