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

  return (
    <div className="h-[calc(100vh-34px-251px)] bg-backgroundTextEditor1 border-b border-borderColor">
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
