import React from "react";
import { TextareaAutosize } from "@material-ui/core";

function jsonLinksToPlainText(links) {
  return links
    .map(
      (link) =>
        `${link.name}: ${link.displayText ? link.displayText : link.url}`
    )
    .join("\n");
}

export default function index(props) {
  return (
    <TextareaAutosize
      style={{ width: "100%" }}
      fullwidth="true"
      rowsMax={5}
      defaultValue={jsonLinksToPlainText(props.links)}
    />
  );
}
