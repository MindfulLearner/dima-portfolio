//skill carousel panel
import React, { useState } from "react";
import { arraySkill } from "../../../../data/arraySkill";
import { motion } from "framer-motion";


function SkillCarouselPanel() {
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
    <div className="h-[calc(100vh-34px-251px)] bg-backgroundTextEditor1 border-b border-l border-r border-borderColor">
     

      {/* ciclero un array di parole che avranno un effetto di trasizione da destra a sinistra infinito */}
      <div className="flex items-center h-[calc(100%-31px)] overflow-x-hidden terminal-scroll gap-10 mask-gradient test">
        {[...arraySkill, ...arraySkill].map((item, index) => (
          <motion.div
            animate={{ x: [0, -10000] }}
            transition={{ duration: 100, ease: "linear", repeat: Infinity }}
            key={index}
          >
            <div
              className={`text-gray-300 text-2xl flex items-center max-w-[650px] gap-4`}
            >
              <div className="min-w-20 min-h-20 flex justify-center items-center">
                <img
                  src={item.png}
                  alt={item.skill}
                  className="w-[100%] h-[100%]"
                />
              </div>
              <div className="font-quicksand font-bold text-8xl">
                {item.skill}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SkillCarouselPanel;
