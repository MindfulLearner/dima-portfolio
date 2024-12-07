// ORA CERCHEREMO DI AGGIUNGERE FADE IN E FADE OUT DEI DUE PANEL 
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function TextEditorPanel1() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
    console.log("mouse entered");
  }

  function handleMouseOut() {
    setIsHovered(false);
    console.log("mouse left");
  }

  const [isHoveredSelectTab, setIsHoveredSelectTab] = useState(false);

  function handleMouseOverSelectTab() {
    setIsHoveredSelectTab(true);
    console.log("mouse entered");
  }
  function handleMouseOutSelectTab() {
    setIsHoveredSelectTab(false);
    console.log("mouse left");
  }

  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  function handleTabClick(index: number) {
    setActiveTab(index);
  }

  return (
    <div className="h-[calc(100vh-34px-220px)] bg-backgroundTextEditor1 border-b border-borderColor">
      <div className="w-full flex bg-emptybarColor shadow-lg">
        {/* barra navigazione */}
        <div className={`bg-backgroundTextEditor1 max-w-[200px] pl-2 pr-2 flex h-[31px] items-center gap-2 ${activeTab === 0 ? 'bg-backgroundTextEditor1' : 'bg-emptybarColor'}`}
        onMouseEnter={handleMouseOverSelectTab}
        onMouseLeave={handleMouseOutSelectTab}
        onClick={() => handleTabClick(0)}
        >
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              AboutMePanel.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        {/* questo ha un border a sinistra e sotto .. ? come sistemare  anche bg di questo */}
        {/* if hoover bg-backgroundTextEditor1 */}
        <div className={`max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${activeTab === 1 ? 'bg-backgroundTextEditor1' : 'bg-emptybarColor'}`}
        onMouseEnter={handleMouseOverSelectTab}
        onMouseLeave={handleMouseOutSelectTab}
        onClick={() => handleTabClick(1)}
        >
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              ContactMePanel.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        <div className={`max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${activeTab === 2 ? 'bg-backgroundTextEditor1' : 'bg-emptybarColor'}`}
        onMouseEnter={handleMouseOverSelectTab}
        onMouseLeave={handleMouseOutSelectTab}
        onClick={() => handleTabClick(2)}
        >
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              SkillCarouselPanel.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        <div className={`max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${activeTab === 3 ? 'bg-backgroundTextEditor1' : 'bg-emptybarColor'}`}
        onMouseEnter={handleMouseOverSelectTab}
        onMouseLeave={handleMouseOutSelectTab}
        onClick={() => handleTabClick(3)}
        >
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
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

      {/* hidden if hoover true */}

      {/* logica block and none funziona  */}
      {/* ora cerco di aggiungere fade in e fade out  */}
      <div
        className="p-10 h-[calc(100%-31px)] w-[100%] relative overflow-auto terminal-scroll"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        {/* quando hoovero ci sara un effetto fadeout prima di attavarsi il display none */}


          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => {
              if (!isHovered) {
                setIsHovered(false);
              }
            }}
          >

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ y: -20, opacity: 0 }
          }
          >
            <h1 className="font-quicksand text-5xl font-bold text-gray-300">
              Hello.
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <h2 className="font-quicksand text-xl font-bold mt-2 text-gray-300">
              I'm Joshua
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <div className="font-quicksand flex mt-2 text-gray-300">
              <p>
                I'm a software developer learner, based in Italy, Milan. 
                <br />
                This is my portfolio and everything you see here is interactive.
                <br />
                Check out the code in this website, by clicking the icon in the header.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* in hoover */}
        {/* showing only if hoover true */}

          <motion.div
          className="absolute top-0 left-0 pl-10 h-[100%] w-[100%] flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => {
              if (!isHovered) {
                // Nascondi il contenuto dopo l'animazione
                setIsHovered(false);
              }
            }}
          >
            <div className="h-[200px] w-[100%] flex flex-col justify-center items-center gap-2">
            <p className="font-quicksand text-gray-300">
              Making good questions and answers is the key of human progress,
              grateful on learning new things.
            </p>
            <div className="flex gap-2 items-center">
              <div className="rounded-full h-8 w-8 outline outline-1 outline-borderColor">
                <img
                  className="p-1"
                  src="/icons/png-fungo-icon.png"
                  alt="fungo"
                />
              </div>
              <div className="font-quicksand text-gray-300">Joshua Dimaunahan</div>
              <div className="font-quicksand text-gray-300">- Software Engineer</div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}

export default TextEditorPanel1;
