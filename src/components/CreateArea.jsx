import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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
        <Fab
          className="addbtn"
          onClick={(e) => {
            props.onClicked(e, data);
          }}
        >
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
