import React, { useState } from "react";
import { ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CustomEditor = (props) => {
  let _contentState = ContentState.createFromText(
    props.descriptionText ? props.descriptionText : "What are your thoughts?"
  );
  const raw = convertToRaw(_contentState);
  const [contentState, setContentState] = useState(raw); // ContentState JSON
  return (
    <div className="App">
      <header className="App-header"></header> {/* can add header text here */}
      <Editor
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorStyle={{ border: "1px solid #bdbdbd", height: 300 }}
      />
    </div>
  );
};

export default CustomEditor;
