import React from "react";
import { NavBarForPanel } from "./components/EditorSection/NavBarForPanel";
import SideServerSection from "../../BottomSection/Terminal1";

const MainContainer: React.FC = () => {
    return (
      <div className="flex h-[calc(100vh-34px-21px)]">
      <div className="w-[calc(100%-250px)] border-r border-borderColor">
        <NavBarForPanel />
        <SideServerSection />
      </div>
    </div>
    );
};

export default MainContainer;