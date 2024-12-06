import React from "react";
import SidePanel from "../../../SidePanel/SidePanel";
import TwoPanelSection from "./TwoPanelSection/TwoPanelSection";
import SideServerSection from "./TerminalBottom/SideServerSection";

const MainContainer: React.FC = () => {
    return (
      <div className="flex h-[calc(100vh-34px-21px)]">
      <div className="w-[calc(100%-250px)] border-r border-borderColor">
        <TwoPanelSection />
        <SideServerSection />
      </div>
        <SidePanel />
    </div>
    );
};

export default MainContainer;