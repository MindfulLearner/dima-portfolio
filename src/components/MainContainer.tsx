import React from "react";
import TextEditorSection from "./TextEditorSection/TextEditorSection";
import BottomSection from "./BottomSection/BottomSection";
import SideTerminal from "./SidePanel/SidePanel";

function MainContainer() {
  return (
    <div className="flex h-[calc(100vh-35px)]">
      <div className="w-[80%] bg-blue-500">
        <TextEditorSection />
        <BottomSection />
      </div>
      <SideTerminal />
    </div>
  );
}

export default MainContainer;
