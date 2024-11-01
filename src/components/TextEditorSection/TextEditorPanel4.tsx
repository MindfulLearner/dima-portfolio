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


const handleClickScrollTo = (index: number) => {
  const section = document.getElementById(`${index}`);
  console.log(section);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
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

      <div className="h-[calc(100%-31px)] w-full overflow-y-scroll no-scrollbar">
        {/* questo sara in position fixed */}
        {/* da sistemare con GRID */}
          <div className="fixed grid grid-cols-12 pt-16 w-full ml-10">
            {carouselWork.map((item: any, index: number) => (
              <div key={index} className="font-quicksand text-gray-300 font-bold col-start-1">
                <a className="hover:text-gray-500 cursor-pointer" onClick={() => handleClickScrollTo(index)}>{item.title}</a>
              </div>
          ))}
        </div>
        {/* section of works */}
          <div className="h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16" id="0">
            <div className="col-start-3 col-end-5">
              <div className="font-quicksand text-gray-300 font-bold">
               <img src={carouselWork[0].icon} alt={carouselWork[0].title} />
              </div>
            </div>
            <div className="col-start-5 col-end-8">
              <img className="shadow-xl" src={carouselWork[0].image[1]} alt={carouselWork[0].title} />
            </div>
            <div className="col-start-8 col-end-10">
              <img className="shadow-xl" src={carouselWork[0].image[3]} alt={carouselWork[0].title} />
            </div>
            <div className="col-start-10 col-end-13">
              <img className="shadow-xl" src={carouselWork[0].image[2]} alt={carouselWork[0].title} />
            </div>
          </div>

          <div className="h-[300px] grid grid-cols-12 gap-4 mr-10 pt-16" id="1">
            <div className="col-start-3 col-end-5">
              <img className="rounded-xl bg-gray-100" src={carouselWork[1].icon} alt={carouselWork[1].title} />
            </div>
            <div className="col-start-5 col-end-8">
              <img className="shadow-xl" src={carouselWork[1].image[1]} alt={carouselWork[1].title} />
            </div>
            <div className="col-start-8 col-end-10">
              <img className="shadow-xl" src={carouselWork[1].image[3]} alt={carouselWork[1].title} />
            </div>
            <div className="col-start-10 col-end-13">
              <img className="shadow-xl" src={carouselWork[1].image[2]} alt={carouselWork[1].title} />
            </div>
          </div>


        {/* usero grid per farelo  */}


      </div>
    </div>
  );
}

export default TextEditorPanel4;
