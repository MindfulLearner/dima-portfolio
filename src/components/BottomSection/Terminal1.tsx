import React, { useRef, useState } from "react";
import { TerminaleListOfCommands, TerminalArray } from "../data/TerminalsArray";

function Terminal1() {

  // faccio una copia di array per non modificare il file originale
  const Terminale1ListOfCommands = [...TerminaleListOfCommands];


  // we define the terminal output state
  const [terminalOutput, setTerminalOutput] = useState<string[] | undefined>(undefined);

//defining the ref for the command input
  const commandInputRef = useRef<HTMLInputElement>(null);

  /**
   * handle the submit of the command input activate different functions
   * we will use a callback function to handle the different commands
   */
  const handleCommandSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('you write:', commandInputRef.current?.value);
    // we get the value of the command input
    const previousCommand = commandInputRef.current?.value;
    // we set the terminal output with the new value
    setTerminalOutput([...terminalOutput || [], previousCommand || ""]);
    // we clear the command input
    if (previousCommand) {
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
    <div className=" w-full h-[calc(100%-2px)] overflow-y-auto">
      <div>
        {/* this will be the terminal output */}
        {terminalOutput?.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      {printBaseCommandsLine()}
    </div>
  );
}

export default Terminal1;


// dovremmo pushare dentro array 
// linea normale e il comando che ho inserito in precedenza o dovra rimanere stampato nel terminale
