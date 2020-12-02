import React from "react";
import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button
        onClick={() => {
          props.onDeleteRequire(props.id);
        }}
      >
        <DeleteForeverIcon />
      </Button>
    </div>
  );
}

export default Note;
