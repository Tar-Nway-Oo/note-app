import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NoteData } from "../App"
import "../assets/new.css"

type NoteFormProps = {
   createNote: (data: NoteData) => void
}

export default function NoteForm({createNote}: NoteFormProps) {

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  function handleSave() {
     if (titleRef.current == null || bodyRef.current == null || titleRef.current.value === "" || bodyRef.current.value === "" ) return;
     createNote({title: titleRef.current.value, body: bodyRef.current.value});
     navigate("/");
  }

  return (
    <div className="form">
      <div className="form_input-group">
        <label className="form_label" htmlFor="title">Title:</label>
        <input ref={titleRef} className="form_input" id="title" type="text" />
      </div>
      <div className="form_input-group">
        <label className="form_label" htmlFor="body">Body:</label>
        <textarea ref={bodyRef} className="form_text-area" id="body" cols={50} rows={10} />
      </div>
      <div className="form_btn-group">
        <button className="form_save-btn" onClick={handleSave}>Save</button>
        <Link to="/"><button className="form_cancel-btn">Cancel</button></Link>
      </div>
    </div>
  )
}
