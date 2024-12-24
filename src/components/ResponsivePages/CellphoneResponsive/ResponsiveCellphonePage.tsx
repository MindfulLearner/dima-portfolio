import React from "react";
import { NavBarForPanel } from "./components/EditorSection/NavBarForPanel";

const MainContainer: React.FC = () => {
    return (
      <div className="flex h-[calc(100vh-34px-21px)]">
      <div className="w-[calc(100%-40px)] border-r border-borderColor">
        <NavBarForPanel />
      </div>
    </div>
    );
};

export default MainContainer;