import React, { useState, useRef } from "react";
import carouselWork from "../data/CarouselWork";
import { motion } from "framer-motion";

function TextEditorPanel4() {

  const [isHoveredSelectTab, setIsHoveredSelectTab] = useState(false);
  /**
   * handle the mouse over of the select tab
   */
  function handleMouseOverSelectTab() {
    setIsHoveredSelectTab(true);
  }
  /**
   * handle the mouse out of the select tab
   */
  function handleMouseOutSelectTab() {
    setIsHoveredSelectTab(false);
  }


  const [isSelectedWork, setIsSelectedWork] = useState<number | undefined>(0);
  /**
   * handle the selected work
   */
  function handleSelectedWork(index: number) {
    console.log("index", index);
    setIsSelectedWork(index);
  }

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  //TODO: da fare react native e non DOM 
  const handleClickScrollTo = (index: number) => {
    const section = sectionRefs.current[index];
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
          className={`max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${isHoveredSelectTab ? "bg-backgroundTextEditor1" : "bg-emptybarColor"
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

      {/* array parametro activeImage logic: quando clicco un elemento activeimagediventa true e il colore del testo cambiera, eventualmente se ci metto hover prendera quel colore nel mentre */}

      <div className="h-[calc(100%-31px)] w-full overflow-y-auto">
        {/* questo sara in position fixed */}
        {/* da sistemare con GRID */}
        <div className="flex items-center z-10 h-[302px] fixed">
          <div className="grid grid-cols-1 w-[100px] ml-10">
            {carouselWork.map((item: any, index: number) => (
            <div
              key={index}
              className={`font-quicksand p-1 text-gray-300 font-bold col-start-1 ${isSelectedWork === index ? "bg-gray-500 rounded-sm" : ""} `}
            >
              <a
                className={`hover:text-gray-200 cursor-pointer ${isSelectedWork === index ? "text-white underline " : "text-gray-500"} `}
                onClick={() => {handleClickScrollTo(index); handleSelectedWork(index)}}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
        </div>

        {/* section of works */}

        {/* svgestor */}
        <div 
          className="h-[100px] pl-[180px] w-full pt-16 pr-10 z-8 relative" 
          ref={element => sectionRefs.current[0] = element}
        >
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
            <div className="z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button className="bg-purple-400 text-black rounded-md p-1" onClick={() => window.open(carouselWork[0].link, "_blank")}>
                  <a>Link to Github Doc(ENG)</a>
                </button>
              </motion.div>
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
                SVGO
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                Library
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                Nodejs
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Figma
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                Learning
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                OpenSource
              </span>
            </div>
          </div>
        </div>


        {/* prometheus */}
        <div 
          className="h-[100px] pl-[180px] w-full pt-16 pr-10 z-8 relative" 
          ref={element => sectionRefs.current[1] = element}
        >
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
            <div className="z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button className="bg-blue-400 text-black rounded-md p-1 " onClick={() => window.open(carouselWork[1].link, "_blank")}>
                  <p>Link to Organization Github</p>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[1].image[0]}
              alt={carouselWork[1].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[1].image[1]}
              alt={carouselWork[1].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                Tailwind
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                React
              </span>
              <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">
                HTML
              </span>
              <span className="bg-purple-200 text-purple-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-800 dark:text-purple-300">
                CSS
              </span>
              <span className="bg-pink-200 text-pink-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-800 dark:text-pink-300">
                Figma
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-yellow-300">
                Git
              </span>
              <span className="bg-indigo-200 text-indigo-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-800 dark:text-indigo-300">
                Teamwork
              </span>
            </div>
          </div>
        </div>

        {/* dimanet */}
        <div 
          className="h-[100px] pl-[180px] w-full pt-16 pr-10 z-8 relative" 
          ref={element => sectionRefs.current[2] = element}
        >
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
            <div className="z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button className="bg-orange-400 text-black rounded-md p-1" onClick={() => window.open(carouselWork[2].link, "_blank")}>
                  <p>Link to Documentation(IT)</p>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[2].image[0]}
              alt={carouselWork[2].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[2].image[2]}
              alt={carouselWork[2].title}
            />
          </div>
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[2].image[3]}
              alt={carouselWork[2].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[2].image[4]}
              alt={carouselWork[2].title}
            />
          </div>
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[2].image[5]}
              alt={carouselWork[2].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[2].image[6]}
              alt={carouselWork[2].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                Linux
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                Nvim
              </span>
              <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">
                Docker
              </span>
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">
                Pentesting
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                Proxmox
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                ArchLinux
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                Self-hosting
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                NAS
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Learning
              </span>
            </div>
          </div>
        </div>

        {/* dimafolio */}
        <div 
          className="h-[100px] pl-[180px] w-full pt-16 pr-10 z-8 relative" 
          ref={element => sectionRefs.current[3] = element}
        >
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
            <div className="z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button className="bg-blue-500 text-black rounded-md p-1" onClick={() => window.open(carouselWork[3].link, "_blank")}>
                  <p>View the project!</p>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[3].image[0]}
              alt={carouselWork[3].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[3].image[1]}
              alt={carouselWork[3].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-red-200 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                React
              </span>
              <span className="bg-yellow-300 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                Tailwind
              </span>
              <span className="bg-green-200 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                Framer Motion
              </span>
              <span className="bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Git
              </span>
              <span className="bg-purple-300 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                Figma
              </span>
              <span className="bg-orange-200 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">
                CSS
              </span>
              <span className="bg-teal-200 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">
                HTML
              </span>
            </div>
          </div>
        </div>

        {/* boolean */}
        <div 
          className="h-[100px] pl-[180px] w-full pt-16 pr-10 z-8 relative" 
          ref={element => sectionRefs.current[4] = element}
        >
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
                  <div>Course</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[4].title}
                </div>
                <div>{carouselWork[4].description}</div>
              </div>
            </div>
            <div className="z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button className="bg-green-500 text-black rounded-md p-1" onClick={() => window.open(carouselWork[4].link, "_blank")}>
                  <p>Link to my favorite project!</p>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[4].image[0]}
              alt={carouselWork[4].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[4].image[1]}
              alt={carouselWork[4].title}
            />
          </div>
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[4].image[2]}
              alt={carouselWork[4].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[4].image[3]}
              alt={carouselWork[4].title}
            />
          </div>
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[4].image[4]}
              alt={carouselWork[4].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[4].image[5]}
              alt={carouselWork[4].title}
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
        <div 
          className="h-[100px] pl-[180px] w-full pt-16 pr-10 z-8 relative" 
          ref={element => sectionRefs.current[5] = element}
        >
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
                  <div>Employer</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[5].title}
                </div>
                <div>{carouselWork[5].description}</div>
              </div>
            </div>
            <div className="z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button className="bg-orange-500 text-black rounded-md p-1" onClick={() => window.open(carouselWork[5].link, "_blank")}>
                  <p>Unieuro Website Shop!</p>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[5].image[0]}
              alt={carouselWork[5].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[5].image[1]}
              alt={carouselWork[5].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-green-200 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                Communication
              </span>
              <span className="bg-orange-200 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">
                Adaptability
              </span>
              <span className="bg-yellow-300 text-yellow-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-800 dark:text-yellow-300">
                Problem-solving
              </span>
              <span className="bg-blue-300 text-blue-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-800 dark:text-blue-300">
                Collaboration
              </span>
              <span className="bg-purple-300 text-purple-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-800 dark:text-purple-300">
                Time Management
              </span>
              <span className="bg-red-300 text-red-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-800 dark:text-red-300">
                Leadership
              </span>
              <span className="bg-teal-300 text-teal-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-800 dark:text-teal-300">
                Attention to Detail
              </span>
            </div>
          </div>
        </div>

        {/* mcdonald */}
        <div 
          className="h-[100px] pl-[180px] w-full pt-16 pr-10 z-8 relative" 
          ref={element => sectionRefs.current[6] = element}
        >
          <div className="flex justify-between gap-2 items-center text-gray-300 font-quicksand">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-20"
                  src={carouselWork[6].icon}
                  alt="fungo"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div>Jolly</div>
                  <div>2024</div>
                </div>
                <div className="font-bold text-5xl">
                  {carouselWork[6].title}
                </div>
                <div>{carouselWork[6].description}</div>
              </div>
            </div>
            <div className="z-10">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button className="bg-yellow-500 text-black rounded-md p-1" onClick={() => window.open(carouselWork[6].link, "_blank")}>
                  <p>McDonald Website</p>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grid grid-cols-12 gap-4 mr-5 pt-16 pl-[180px] relative">
          <div className="col-start-1 col-end-7">
            <img
              className="shadow-xl"
              src={carouselWork[6].image[0]}
              alt={carouselWork[6].title}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <img
              className="shadow-xl max-h-[254px]"
              src={carouselWork[6].image[1]}
              alt={carouselWork[6].title}
            />
          </div>
          <div className="flex">
            <div className="flex gap-2 flex-wrap min-w-[262px]">
              <span className="bg-red-200 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                Communication
              </span>
              <span className="bg-orange-200 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">
                Adaptability
              </span>
              <span className="bg-green-200 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                Problem-solving
              </span>
              <span className="bg-cyan-200 text-cyan-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-cyan-900 dark:text-cyan-300">
                Collaboration
              </span>
              <span className="bg-purple-300 text-purple-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-800 dark:text-purple-300">
                Time Management
              </span>
              <span className="bg-yellow-300 text-yellow-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-800 dark:text-yellow-300">
                Attention to Detail
              </span>
              <span className="bg-blue-300 text-blue-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-800 dark:text-blue-300">
                Leadership
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
