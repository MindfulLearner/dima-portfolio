//text editor panel 4
import React, { useState } from "react";

function TextEditorPanel4() {
  const [isHoveredSelectTab, setIsHoveredSelectTab] = useState(false);

  function handleMouseOverSelectTab() {
    setIsHoveredSelectTab(true);
  }
  function handleMouseOutSelectTab() {
    setIsHoveredSelectTab(false);
  }
  return (
    <div className="h-1/2 bg-backgroundTextEditor1 border-b border-l border-r border-borderColor">
      <div className="shadow-bottom w-full flex  bg-emptybarColor shadow-lg">
        {/* barra navigazione */}
        <div className="bg-backgroundTextEditor1 max-w-[200px] pl-2 pr-2 flex h-[31px] items-center gap-2">
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/react-icon.png" alt="react" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">MyWork.tsx</div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        <div className={`max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${isHoveredSelectTab ? 'bg-backgroundTextEditor1' : 'bg-emptybarColor'}`}
        onMouseEnter={handleMouseOverSelectTab}
        onMouseLeave={handleMouseOutSelectTab}
        >
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">Presentation.tsx</div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
      </div>
   <div className="h-[calc(100%-31px)] flex">
        <div className="h-[100%] w-[50%] flex flex-col justify-center items-center">
          <div className="flex flex-col">
            <h1 className="font-quicksand text-5xl font-bold text-gray-300">Unieuro</h1>
            <h2 className="font-quicksand text-xl font-bold mt-2 text-gray-300">Manager</h2>
          </div>
        </div>
        <div className="h-[100%] w-[50%] flex flex-col justify-center items-start">
            <div className="flex flex-col text-gray-300 w-[80%]">
              <p className="font-quicksand">
                Manager, Unieuro Rinascente, Milano
              </p>
              <p className="font-quicksand">
                I worked here as a manager for 4 months. My job was to manage the store,
                most of the time i was had to make decisions and solve problems.
                It helped me to learn how to manage a team and how to handle stressful situations, and so soft skills.
              </p>
            </div>
        </div>

      </div>

    </div>
  );
}

export default TextEditorPanel4;
