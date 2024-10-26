//text editor panel 3
import React, { useState } from "react";
import { arraySkill } from "../data/arraySkill";
import { motion } from "framer-motion";

function TextEditorPanel3() {
  const [isHoveredSelectTab, setIsHoveredSelectTab] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  // solo il tab dove ho hooverato il mouse non tutti
  function handleMouseOverSelectTab(tab: number) {
    setIsHoveredSelectTab(true);
    setActiveTab(tab);
  }
  function handleMouseOutSelectTab(tab: number) {
    setIsHoveredSelectTab(false);
    setActiveTab(tab);
  }
  return (
    <div className="h-1/2 bg-backgroundTextEditor1 border-b border-l border-r border-borderColor">
      <div className="w-full flex  bg-emptybarColor shadow-lg">
        {/* barra navigazione */}
        <div className="bg-backgroundTextEditor1 max-w-[200px] pl-2 pr-2 flex h-[31px] items-center gap-2">
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/skill-icon.png" alt="skill" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              MySkills.tsx
            </div>
            <div className="text-gray-300">U</div>
          </div>
        </div>
        {/* questo ha un border a sinistra e sotto .. ? come sistemare  anche bg di questo */}
        {/* in questo modo il tab è attivo solo se ho hoverato il mouse sopra solo a ogni tipo di tab */}
        <div
          className={`max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 
            ${isHoveredSelectTab && activeTab === 2 ? "bg-backgroundTextEditor1" : "bg-emptybarColor"}
          }`}
          onMouseEnter={() => handleMouseOverSelectTab(2)}
          onMouseLeave={() => handleMouseOutSelectTab(2)}
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
        <div
          className={`max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 
            ${isHoveredSelectTab && activeTab === 3 ? "bg-backgroundTextEditor1" : "bg-emptybarColor"}
          }`}
          onMouseEnter={() => handleMouseOverSelectTab(3)}
          onMouseLeave={() => handleMouseOutSelectTab(3)}
        >
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/work-icon.png" alt="work" />
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

      {/* ciclero un array di parole che avranno un effetto di trasizione da destra a sinistra infinito */}
      <div className="flex items-center h-[calc(100%-31px)] overflow-x-auto no-scrollbar gap-10">
        {[...arraySkill, ...arraySkill, ...arraySkill].map((item, index) => (
          <motion.div
            animate={{ x: [0, -6000] }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
            key={index}
          >
            <div
              className={`text-gray-300 text-2xl flex items-center max-w-[400px] gap-4`}
            >
              <div className="min-w-12 min-h-12 flex justify-center items-center">
                <img
                  src={item.png}
                  alt={item.skill}
                  className="w-[100%] h-[100%]"
                />
              </div>
              <div className="font-quicksand font-bold text-7xl">
                {item.skill}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TextEditorPanel3;
