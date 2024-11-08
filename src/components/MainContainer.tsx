import React from "react";
import TextEditorSection from "./TextEditorSection/TextEditorSection";
import BottomSection from "./BottomSection/BottomSection";
import SideTerminal from "./SidePanel/SidePanel";

function MainContainer() {
  return (
    <div className="flex h-[calc(100vh-34px-21px)]">
      <div className="w-[calc(100%-250px)] border-r border-borderColor">
        <TextEditorSection />
        <BottomSection />
      </div>
      <SideTerminal />
    </div>
  );
}

export default MainContainer;
