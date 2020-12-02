import React from "react";
import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

function Note(props) {
  return (
    <div className="note">
      <BookmarkBorderOutlinedIcon className="markicon" />
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
