import React, { useEffect, useReducer } from "react";
import notesReducer from "../reducers/notes";
import NotesList from "./NoteList";
import Form from "./Form";
import NotesContext from "../context/NotesContext";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NotesList />
      <Form />
    </NotesContext.Provider>
  );
};

export default NoteApp;
