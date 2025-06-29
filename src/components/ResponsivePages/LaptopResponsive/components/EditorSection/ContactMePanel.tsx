//text editor panel 2
import React, { useState } from "react";
import { SquareCards } from "../../../../PublicComponents/Components/squareCards";
import { ArraySvgComponents } from "../../../../data/ArraySvgComponents";
import { motion } from "framer-motion";


function ContactMePanel() {
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

  //click on the select square
   function handleClick(index: number) {
    //open the link
    // il numero deve restituire sempre un numero da 0 a 5
    const number = index % 5;
    window.open(ArraySvgComponents[number].link, "_blank");
  }

  return (
    <div className="h-[calc(100vh-34px-271px)] bg-backgroundTextEditor1 border-b border-borderColor  ">
      

      {/* applico logica, se hoovero su questa parte il testo sparisce e ne apparte un altra  */}
      <div className="h-[calc(100%-31px)] mask-gradient terminal-scroll">
        <div className="h-[calc(100%-200px)] flex gap-2">
          {/* qui ci conterra titolo o messaggi */}
          <div className="font-quicksand flex justify-center items-center pt-10 text-white text-xl font-bold pl-2 pr-2 w-1/2">
          {/* tempo di hover 0.2 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-black to-emptybarColor 0 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                Reach me
              </button>
            </motion.div>
          </div>
          <div className="font-quicksand flex justify-center items-center h-full text-white text-sm pl-2 pr-2 w-1/2">
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
          ].map((Item, index) => {
            const SvgComponent = Item.svg;
            return (
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
                onClick={() => handleClick(index)}
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
                  cursor: "pointer",
                  transition:
                    "background-color 0.3s ease, min-width 0.3s ease, min-height 0.3s ease",
                }}
              >
                <SvgComponent
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
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default ContactMePanel;
