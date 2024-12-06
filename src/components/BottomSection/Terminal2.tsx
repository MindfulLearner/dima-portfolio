import React, { useRef, useState, useEffect } from "react";
import { TerminaleListOfCommands } from "../data/TerminalsArray";

function Terminal2() {
  // list of commands that the user can type in the terminal
  const listOfCommands = TerminaleListOfCommands;

  // defining the ref for the command input
  const commandInputRef = useRef<HTMLInputElement>(null);

  // Define the terminal output state
  const [terminalOutput, setTerminalOutput] = useState<JSX.Element[]>([]);

  /**
   * this scrolls to the bottom of the terminal
   */
  const scrollToBottom = () => {
    commandInputRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  /**
   * this will scroll to the bottom of the terminal when the terminal output is updated
   */
  useEffect(() => {
    scrollToBottom();
  }, [terminalOutput]);

  /**
   * Handle the submit of the command input
   */
  const handleCommandSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const previousCommand = commandInputRef.current?.value?.trim();

    if (previousCommand) {
      console.log("you write:", previousCommand);

      const newCommandLine = (
        <div className=" font-mono text-sm items-center">
          <div className="flex gap-2">
            <div className="text-yellow-500">learner</div>
            <div className="text-white">in</div>
            <div className="text-blue-500">dima-portfolio</div>
            <div className="text-white">at</div>
            <div className="text-green-500">dimorega-net-ct</div>
            <div className="text-white">on</div>
            <div className="text-orange-400">feat/workingonit</div>
            <div className="text-white">...</div>
          </div>
          <div className="flex gap-2">
            <div>~</div>
            <div className="text-white">{previousCommand}</div>
          </div>
        </div>
      );

      setTerminalOutput((prevOutput) => [...prevOutput, newCommandLine]);

      if (commandInputRef.current) {
        commandInputRef.current.value = "";
      }

      inputCommandHandler(previousCommand);
    }
  };

  const inputCommandHandler = (string: string) => {
    // this will handle the input command
    console.log(string);
    console.log(listOfCommands);
    if (listOfCommands.find((command) => command.command === string)) {
      switch (string) {
        case "ls":
          console.log("ls command found");
          break;
        case "cd":
          console.log("cd command found");
          break;
        case "help":
          console.log("help command found");
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm flex gap-3">
              {listOfCommands.map((command) => (
                <div className="font-bold">{command.command}</div>
              ))}
            </div>,
          ]);
          break;
        // Case help <command>
        case "help ls":
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm flex gap-3">
              {listOfCommands
                .find((command) => command.command === string)
                ?.output?.map((output) => (
                  <div className="font-bold">{output.helpCommand}</div>
                ))}
            </div>,
          ]);
          break;

        default:
          console.log("command not found");
          break;
      }
    } else {
      setTerminalOutput((prevOutput) => [
        ...prevOutput,
        <div className="text-red-500 font-mono text-sm">
          Error: Command not found: "{string}" ReferenceError: {string} is not
          defined Type "help" to see all the commands that you can use.
        </div>,
      ]);
    }
  };

  return (
    <div 
      className="w-full h-[calc(100%-2px)] overflow-y-auto terminal-scroll"
    >
      {/* sezione per riempire un pochino il terminal */}
      <form
        className=" w-full font-mono text-sm h-textsm"
        onSubmit={handleCommandSubmit}
      >
        <div className="flex gap-2">
          <div className="text-red-500">learner</div>
          <div className="text-white">in</div>
          <div className="text-teal-500">dima-portfolio</div>
          <div className="text-white">at</div>
          <div className="text-pink-500">dimorega-net-ct</div>
          <div className="text-white">on</div>
          <div className="text-indigo-400">feat/workingonit</div>
          <div className="text-white">...</div>
        </div>
        <div className="flex gap-2">
          <div>➔</div>
          <div className="text-green-300 font-mono text-sm">
          I explored different technologies, I really appreciate learning and
          admiring creativity and curiosity.
          </div>
        </div>
      </form>

      {/* sezione per riempire un pochino il terminal */}
      <form
        className=" w-full font-mono text-sm h-textsm"
        onSubmit={handleCommandSubmit}
      >
        <div className="flex gap-2">
          <div className="text-red-500">learner</div>
          <div className="text-white">in</div>
          <div className="text-teal-500">dima-portfolio</div>
          <div className="text-white">at</div>
          <div className="text-pink-500">dimorega-net-ct</div>
          <div className="text-white">on</div>
          <div className="text-indigo-400">feat/workingonit</div>
          <div className="text-white">...</div>
        </div>
        <div className="flex gap-2">
          <div>➔</div>
          <div className="text-red-300 font-mono text-sm">
            I also enjoy collaborating with others to solve complex problems and
            share knowledge, which fuels my passion for continuous improvement
            and innovation.
          </div>
        </div>
      </form>

      {/* parte da qui */}
      <div className="font-mono text-sm">
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
          <div className="text-orange-400">feat/workingonit</div>
          <div className="text-white">...</div>
        </div>
        <div className="flex gap-2">
          <div>~</div>
          <input
            type="text"
            className="bg-transparent outline-none w-full"
            placeholder="Type your command..."
            ref={commandInputRef}
          />
        </div>
        <button type="submit" className="hidden"></button>
      </form>
    </div>
  );
}

export default Terminal2;
