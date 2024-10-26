//text editor panel 4
import React, { useState } from "react";
import carouselWork from "../data/CarouselWork";
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
            <div className="font-quicksand text-sm text-gray-300">
              MyWork.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        <div
          className={`max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${
            isHoveredSelectTab ? "bg-backgroundTextEditor1" : "bg-emptybarColor"
          }`}
          onMouseEnter={handleMouseOverSelectTab}
          onMouseLeave={handleMouseOutSelectTab}
        >
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              Presentation.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
      </div>

      {/* we first put everyting in the box and put a overflowy scroll, using an array of list of work experience, we will have clickablelist of work, then with framermotion and scroll to view scroll and scroll o reactscroll we will make it smoothc by we will show the clicked work in the box. */}
      {/* array parametro activeImage logic: quando clicco un elemento activeimagediventa true e il colore del testo cambiera, eventualmente se ci metto hover prendera quel colore nel mentre */}

      <div className="h-[calc(100%-31px)] flex">
        {/* questo sara in position fixed */}
        <div className="w-[50%]">
          {carouselWork.map((item: any, index: number) => (
            <div className="">
              {item.title}
            </div>
          ))}
        </div>
        {/* questi avranno diversi spazi in cui ci saranno delle foto per mostrare il lavoro */}
        <div className="w-[50%]">
          {carouselWork.map((item: any, index: number) => (
            <div>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextEditorPanel4;
