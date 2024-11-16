import React, { useRef, useState } from "react";

function Terminal1() {
  // Defining the ref for the command input
  const commandInputRef = useRef<HTMLInputElement>(null);

  // Define the terminal output state
  const [terminalOutput, setTerminalOutput] = useState<JSX.Element[]>([]);


  /**
   * Handle the submit of the command input
   */
  const handleCommandSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const previousCommand = commandInputRef.current?.value?.trim();

    if (previousCommand) {
      console.log("you write:", previousCommand);

      const newCommandLine = (
        <div
          className=" font-mono text-sm items-center"
        >
          <div className="flex gap-2">
            <div className="text-yellow-500">learner</div>
            <div className="text-white">in</div>
            <div className="text-blue-500">dima-portfolio</div>
            <div className="text-white">at</div>
            <div className="text-green-500">dimorega-net-ct</div>
            <div className="text-white">on</div>
            <div className="text-red-500">feat/workingonit</div>
            <div className="text-white">~</div>
          </div>
          <div className="text-white">{previousCommand}</div>
        </div>
      );

      setTerminalOutput((prevOutput) => [...prevOutput, newCommandLine]);

      if (commandInputRef.current) {
        commandInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="w-full h-[calc(100%-2px)] overflow-y-auto">
      <div>
        {/* Terminal output */}
        {terminalOutput.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      {/* Active command input */}
      <form
        className=" w-full font-mono text-sm h-textsm"
        onSubmit={handleCommandSubmit}
      >
        <div className="flex gap-2">
          <div className="text-yellow-500">learner</div>
          <div className="text-white">in</div>
          <div className="text-blue-500">dima-portfolio</div>
          <div className="text-white">at</div>
          <div className="text-green-500">dimorega-net-ct</div>
          <div className="text-white">on</div>
          <div className="text-red-500">feat/workingonit</div>
          <div className="text-white">~</div>
        </div>
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Type your command..."
          ref={commandInputRef}
        />
        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
}

export default Terminal1;
