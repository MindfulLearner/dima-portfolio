import React, { useRef } from "react";
import { TerminaleListOfCommands, TerminalArray } from "../data/TerminalsArray";

function Terminal1() {

  // faccio una copia di array per non modificare il file originale
  const Terminale1ListOfCommands = [...TerminaleListOfCommands];
  let Terminal1Array = TerminalArray;



//defining the ref for the command input
  const commandInputRef = useRef<HTMLInputElement>(null);

  /**
   * handle the submit of the command input activate different functions
   * we will use a callback function to handle the different commands
   */
  const handleCommandSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('you write:', commandInputRef.current?.value);
    if (commandInputRef.current) {
        commandInputRef.current.value = "";
    }
  };


  const printBaseCommandsLine = () => {
    return (
      <div>
        <div className="flex gap-2 font-mono text-sm font-bold items-center w-full">
          <div className="text-yellow-500">learner</div>
          <div className="text-white">in</div>
          <div className="text-blue-500">dima-portfolio</div>
          <div className="text-white">at</div>
          <div className="text-green-500">dimorega-net-ct</div>
          <div className="text-white">on</div>
          <div className="text-red-500">feat/workingonit</div>
        </div>
        <form
          className="flex gap-2 w-full font-mono text-sm h-textsm"
          onSubmit={handleCommandSubmit}
        >
          <div className="text-white">~</div>
          <input
            type="text"
            className="bg-transparent outline-none w-full"
            placeholder="Type your command..."
            ref={commandInputRef}
          />
          <button type="submit"></button>
        </form>
      </div>
    )
  }


  return (
    <div className="outline outline-1 outline-red-500 w-full h-[calc(100%-2px)]">
      {/* questo deve rimanere a ogni input */}
      {printBaseCommandsLine()}
    </div>
  );
}

export default Terminal1;
