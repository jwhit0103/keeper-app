import React, { useState } from "react";

function CreateArea(props) {
  //Create a note constant for tracking state
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Track state within the form
  function handleChange(event) {
    //De-structure the name and value of changes made in the form
    const { name, value } = event.target;
    // Update the state of the note
    setNote((prevNote) => {
      return {
        ...prevNote, //Spread operator adds the previous note
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
