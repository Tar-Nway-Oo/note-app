import { useRef } from "react"
import { Link } from "react-router-dom"
import { NoteData } from "../App"
import "../assets/css/new.css"

type NoteFormProps = {
   onSave: (data: NoteData) => void
} & Partial<NoteData>

export default function NoteForm({onSave, title = "", body = ""}: NoteFormProps) {

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  

  function handleSave() {
     if (titleRef.current == null || bodyRef.current == null || titleRef.current.value === "" || bodyRef.current.value === "" ) return;
     onSave({title: titleRef.current.value, body: bodyRef.current.value});
  }

  return (
    <div className="form">
      <div className="form_input-group">
        <label className="form_label" htmlFor="title">Title:</label>
        <input ref={titleRef} className="form_input" id="title" type="text" defaultValue={title} />
      </div>
      <div className="form_input-group">
        <label className="form_label" htmlFor="body">Body:</label>
        <textarea ref={bodyRef} className="form_text-area" id="body" cols={50} rows={10} defaultValue={body} />
      </div>
      <div className="form_btn-group">
        <button className="form_save-btn" onClick={handleSave}>Save</button>
        <Link to=".."><button className="form_cancel-btn">Cancel</button></Link>
      </div>
    </div>
  )
}
