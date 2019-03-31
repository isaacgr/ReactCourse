import React, { useState, useContext } from "react";
import NotesContext from "../context/NotesContext";

const Form = () => {
  const { dispatch } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      title,
      body
    });
    setTitle("");
    setBody("");
  };

  return (
    <>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>Add Note</button>
      </form>
    </>
  );
};

export default Form;
