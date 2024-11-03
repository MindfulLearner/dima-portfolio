//text editor panel 2
import React, { useState } from "react";
import { SquareCards } from "../PublicComponents/Components/squareCards";
import { ArraySvgComponents } from "../data/ArraySvgComponents";
import { motion } from "framer-motion";


function TextEditorPanel2() {
  /**
   * this is the state that will handle the hovered card
   */
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  function handleMouseEnter(index: number) {
    setHoveredCard(index);
  }

  function handleMouseLeave() {
    setHoveredCard(null);
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

  return (
    <div className="h-1/2 bg-backgroundTextEditor1 border-b border-borderColor  ">
      <div className="w-full flex  bg-emptybarColor shadow-lg">
        {/* barra navigazione */}
        <div className="bg-backgroundTextEditor1 max-w-[200px] pl-2 pr-2 flex h-[31px] items-center gap-2">
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              AboutMe.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        {/* questa parte da sistemare  */}
        <div className={`max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2 ${isHoveredSelectTab ? 'bg-backgroundTextEditor1' : 'bg-emptybarColor'}`}
        onMouseEnter={handleMouseOverSelectTab}
        onMouseLeave={handleMouseOutSelectTab}
        >
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="font-quicksand text-sm text-gray-300">
              ContactMe.tsx
            </div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
      </div>


      {/* applico logica, se hoovero su questa parte il testo sparisce e ne apparte un altra  */}
      <div className="h-[calc(100%-31px)] mask-gradient">
        <div className="h-[calc(100%-200px)] flex gap-2">
          {/* qui ci conterra titolo o messaggi */}
          <div className="font-quicksand flex justify-center items-center pt-10 text-white text-xl font-bold pl-2 pr-2 w-1/2">
          {/* tempo di hover 0.2 */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 500, damping: 80, bounce: 0.6 }}
            >
              <button
                type="button"
                className="text-white bg-gradient-to-r from-black to-emptybarColor 0 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Reach me
              </button>
            </motion.div>
          </div>
          <div className="font-quicksand flex justify-start items-end h-full text-white text-sm pl-2 pr-2 w-1/2">
            <p>
              I'm available in these platforms, you can contact me for any
              project or job opportunity.
            </p>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar h-[200px] gap-5 items-center flex mask-gradient">
          {/* qui conterra cards */}
          {/* when we put the mouse on the card the color of the item change from white to black and the square from black to white */}
          {[
            ...ArraySvgComponents,
            ...ArraySvgComponents,
            ...ArraySvgComponents,
            ...ArraySvgComponents,
          ].map((Item, index) => (
            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{ duration: 50, ease: "linear", repeat: Infinity }}
              key={index}
            >
              <SquareCards
                shadow="shadow-lg"
                flex="flex"
                items="items-center"
                justify="justify-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                backgroundColor={
                  hoveredCard === index
                    ? "bg-white"
                    : "bg-texteditor2CardsColor"
                }
                width={
                  hoveredCard === index ? "min-w-[120px]" : "min-w-[110px]"
                }
                height={
                  hoveredCard === index ? "min-h-[120px]" : "min-h-[110px]"
                }
                style={{
                  transition:
                    "background-color 0.3s ease, min-width 0.3s ease, min-height 0.3s ease",
                }}
              >
                <Item
                  fill={hoveredCard === index ? "black" : "white"}
                  width={hoveredCard === index ? "45" : "40"}
                  height={hoveredCard === index ? "45" : "40"}
                  style={{
                    transition:
                      "width 0.3s ease, height 0.3s ease, fill 0.3s ease",
                  }}
                />
              </SquareCards>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default TextEditorPanel2;
