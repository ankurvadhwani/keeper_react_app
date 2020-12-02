import React, { useState } from "react";

function CreateArea(props) {
  let [data, setData] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            props.onClicked(e, data);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
