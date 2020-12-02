import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [lists, setLists] = useState([]);

  function AddNote(e, newnote) {
    setLists((previousData) => {
      return [...previousData, newnote];
    });
    e.preventDefault();
  }

  function RemoveNote(index) {
    setLists((prev) => {
      return prev.filter((val, i) => {
        return i !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onClicked={AddNote} />
      {lists.map((prev, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDeleteRequire={RemoveNote}
            title={prev.title}
            content={prev.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
