import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/NotesContext";

const NotesList = () => {
  const { notes } = useContext(NotesContext);

  return notes.map(note => {
    return <Note key={note.title} note={note} />;
  });
};

export default NotesList;
