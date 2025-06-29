import { useState } from "react";
import AboutMePanel from "./AboutMePanel";
import ContactMePanel from "./ContactMePanel";
import SkillCarouselPanel from "./SkillCarouselPanel";
import WorkHistoryPanel from "./WorkHistoryPanel";

export const NavBarForPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabClick(index: number) {
    setActiveTab(index);
  }

  return (
    <>
      <div className="w-full flex bg-emptybarColor shadow-lg">
        {/* barra navigazione */}
        <div
          className={`cursor-pointer max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${
            activeTab === 0 ? "bg-backgroundTextEditor1" : "bg-emptybarColor"
          }`}
          onClick={() => handleTabClick(0)}
        >
          <div className="h-6 w-6 flex-shrink-0">
            <img className="p-1 w-full h-full object-contain" src="/icons/react-icon.png" alt="react icon" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              AboutMePanel.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        <div
          className={`cursor-pointer max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${
            activeTab === 1 ? "bg-backgroundTextEditor1" : "bg-emptybarColor"
          }`}
          onClick={() => handleTabClick(1)}
        >
          <div className="h-6 w-6 flex-shrink-0">
            <img className="p-1 w-full h-full object-contain" src="/icons/react-icon.png" alt="react icon" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              ContactMePanel.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        <div
          className={`cursor-pointer max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${
            activeTab === 2 ? "bg-backgroundTextEditor1" : "bg-emptybarColor"
          }`}
          onClick={() => handleTabClick(2)}
        >
          <div className="h-6 w-6 flex-shrink-0">
            <img className="p-1 w-full h-full object-contain" src="/icons/react-icon.png" alt="react icon" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              SkillCarouselPanel.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        <div
          className={`cursor-pointer max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${
            activeTab === 3 ? "bg-backgroundTextEditor1" : "bg-emptybarColor"
          }`}
          onClick={() => handleTabClick(3)}
        >
          <div className="h-6 w-6 flex-shrink-0">
            <img className="p-1 w-full h-full object-contain" src="/icons/react-icon.png" alt="react icon" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              WorkHistoryPanel.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
      </div>
      {activeTab === 0 && <AboutMePanel />}
      {activeTab === 1 && <ContactMePanel />}
      {activeTab === 2 && <SkillCarouselPanel />}
      {activeTab === 3 && <WorkHistoryPanel />}
    </>
  );
};
