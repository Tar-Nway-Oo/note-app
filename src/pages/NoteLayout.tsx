import {Navigate, Outlet, useParams } from "react-router-dom"
import { Note } from "../App";
import "../assets/css/detail.css"

type NoteLayoutProps = {
   notes: Note[]
}

export default function NoteLayout({notes}: NoteLayoutProps) {

   const {id} = useParams();

  const selectedNote = notes.find(note => note.id === id);

  if (selectedNote == null) return <Navigate to="/" replace />;

  return <Outlet context={selectedNote} />

}