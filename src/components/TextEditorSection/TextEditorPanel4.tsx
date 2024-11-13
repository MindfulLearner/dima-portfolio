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
  };

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

      <div className="h-[calc(100%-31px)] w-full overflow-y-auto no-scrollbar">
        {/* questo sara in position fixed */}
        {/* da sistemare con GRID */}
        <div className="z-10 fixed grid grid-cols-12 pt-16 w-full ml-10">
          {carouselWork.map((item: any, index: number) => (
            <div
              key={index}
              className="font-quicksand text-gray-300 font-bold col-start-1"
            >
              <a
                className="hover:text-gray-500 cursor-pointer"
                onClick={() => handleClickScrollTo(index)}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
        {/* section of works */}

        {/* svgestor */}
        <div className="h-[100px] pl-[180px] w-full pt-16 pr-10" id="0">
          <div className="flex justify-between gap-2 items-center text-gray-300 font-quicksand">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-20"
                  src={carouselWork[0].icon}
                  alt="fungo"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div>Self-taught</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[0].title}
                </div>
                <div>{carouselWork[0].description}</div>
              </div>
            </div>
            <div>
              <button className="bg-gray-100 rounded-md p-1">
                <p>showSite</p>
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[0].image[1]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[0].image[2]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Tailwind
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                HTML
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                CSS
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                Figma
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Git
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                Teamwork
              </span>
            </div>
          </div>
        </div>


        {/* prometheus */}
        <div className="h-[100px] pl-[180px] w-full pt-16 pr-10" id="1">
          <div className="flex justify-between gap-2 items-center text-gray-300 font-quicksand">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-20"
                  src={carouselWork[1].icon}
                  alt="fungo"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div>Self-taught</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[1].title}
                </div>
                <div>{carouselWork[1].description}</div>
              </div>
            </div>
            <div>
              <button className="bg-gray-100 rounded-md p-1">
                <p>showSite</p>
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[1].image[1]}
              alt={carouselWork[1].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[1].image[2]}
              alt={carouselWork[1].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Tailwind
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                HTML
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                CSS
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                Figma
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Git
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                Teamwork
              </span>
            </div>
          </div>
        </div>

        {/* dimanet */}
        <div className="h-[100px] pl-[180px] w-full pt-16 pr-10" id="2">
          <div className="flex justify-between gap-2 items-center text-gray-300 font-quicksand">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-20"
                  src={carouselWork[2].icon}
                  alt="fungo"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div>Self-taught</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[2].title}
                </div>
                <div>{carouselWork[2].description}</div>
              </div>
            </div>
            <div>
              <button className="bg-gray-100 rounded-md p-1">
                <p>showSite</p>
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[0].image[1]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[0].image[2]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Tailwind
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                HTML
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                CSS
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                Figma
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Git
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                Teamwork
              </span>
            </div>
          </div>
        </div>

        {/* dimafolio */}
        <div className="h-[100px] pl-[180px] w-full pt-16 pr-10" id="3">
          <div className="flex justify-between gap-2 items-center text-gray-300 font-quicksand">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-20"
                  src={carouselWork[3].icon}
                  alt="fungo"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div>Self-taught</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[3].title}
                </div>
                <div>{carouselWork[3].description}</div>
              </div>
            </div>
            <div>
              <button className="bg-gray-100 rounded-md p-1">
                <p>showSite</p>
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[0].image[1]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[0].image[2]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Tailwind
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                HTML
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                CSS
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                Figma
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Git
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                Teamwork
              </span>
            </div>
          </div>
        </div>

        {/* boolean */}
        <div className="h-[100px] pl-[180px] w-full pt-16 pr-10" id="4">
          <div className="flex justify-between gap-2 items-center text-gray-300 font-quicksand">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-20"
                  src={carouselWork[4].icon}
                  alt="fungo"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div>Self-taught</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[4].title}
                </div>
                <div>{carouselWork[4].description}</div>
              </div>
            </div>
            <div>
              <button className="bg-gray-100 rounded-md p-1">
                <p>showSite</p>
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[0].image[1]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[0].image[2]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Tailwind
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                HTML
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                CSS
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                Figma
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Git
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                Teamwork
              </span>
            </div>
          </div>
        </div>

        {/* unieuro */}
        <div className="h-[100px] pl-[180px] w-full pt-16 pr-10" id="5">
          <div className="flex justify-between gap-2 items-center text-gray-300 font-quicksand">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-20"
                  src={carouselWork[5].icon}
                  alt="fungo"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div>Self-taught</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[5].title}
                </div>
                <div>{carouselWork[5].description}</div>
              </div>
            </div>
            <div>
              <button className="bg-gray-100 rounded-md p-1">
                <p>showSite</p>
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[0].image[1]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[0].image[2]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Tailwind
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                HTML
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                CSS
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                Figma
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Git
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                Teamwork
              </span>
            </div>
          </div>
        </div>
        
        {/* mcdonald */}
        <div className="h-[100px] pl-[180px] w-full pt-16 pr-10" id="6">
          <div className="flex justify-between gap-2 items-center text-gray-300 font-quicksand">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-20"
                  src={carouselWork[5].icon}
                  alt="fungo"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div>Self-taught</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[5].title}
                </div>
                <div>{carouselWork[5].description}</div>
              </div>
            </div>
            <div>
              <button className="bg-gray-100 rounded-md p-1">
                <p>showSite</p>
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[0].image[1]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[0].image[2]}
              alt={carouselWork[0].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Tailwind
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                HTML
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                CSS
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                Figma
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Git
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                Teamwork
              </span>
            </div>
          </div>
        </div>

        {/* usero grid per farelo  */}
      </div>
    </div>
  );
}

export default TextEditorPanel4;
