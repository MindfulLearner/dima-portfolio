import React from "react";
import TextEditorPanel1 from "./TextEditorPanel1";
import TextEditorPanel2 from "./TextEditorPanel2";

function TextEditorSection() {
  return (
    <div className="flex h-[calc(100%-220px)] bg-yellow-500">
      <div className="h-full w-[35%] bg-red-500">
        <TextEditorPanel1 />
        <TextEditorPanel2 />
      </div>
      <div className="h-full w-[65%] bg-orange-500">
        <TextEditorPanel1 />
        <TextEditorPanel2 />
      </div>
    </div>
  );
}

export default TextEditorSection;
