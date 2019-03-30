import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = e => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        title
      }
    ]);
    setTitle("");
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => {
        return <Note key={note.title} note={note} removeNote={removeNote} />;
      })}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <button>Add Note</button>
      </form>
    </div>
  );
};

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log("setting up effect");

    return () => {
      console.log("cleaning up effect");
    };
  });

  return (
    <div key={note.title}>
      <h3>{note.title}</h3>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  );
};

// const App = props => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     console.log("useEffect ran");
//     document.title = count;
//   });

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(props.count);
//   };

//   return (
//     <div>
//       <p>
//         The current count is {text || "count"} is {count}
//       </p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>reset</button>
//       <input value={text} onChange={e => setText(e.target.value)} />
//     </div>
//   );
// };

// App.defaultProps = {
//   count: 0
// };

ReactDOM.render(<NoteApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
