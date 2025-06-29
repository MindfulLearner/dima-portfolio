import React, { useRef, useState, useEffect } from "react";
import { TerminaleListOfCommands } from "../data/TerminalsArray";

function Terminal1() {

  // kunai jump 2 swag logic code
  // email state
  const [email, setEmail] = useState("");

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

  const isFetched = async (email: string) => {
    const response = await fetch(`api/test/vps`, {
      method: "POST",
    });
    return response.ok;
  };

  const inputCommandHandler = async (string: string) => {
    // this will handle the input command

    const gitCommitRegex = /^git commit -m "(.+?)"$/;
    const isEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // check if the string is a valid email
    const isGitCommitMatch = gitCommitRegex.test(string)

    if (isGitCommitMatch) {
      const emailAdjusted = string.split(" ")[3].replace(/"/g, '');
      const isEmailMatch = isEmailRegex.test(emailAdjusted);
      if (isEmailMatch) {
        if (await isFetched(emailAdjusted)) {
          setEmail(emailAdjusted);
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm">
              <div className="text-green-500 font-bold mb-2">✓ Commit successful!</div>
              <div className="text-gray-300">Message: "{emailAdjusted}"</div>
              <div className="text-blue-300 mt-2">Push your contribution!</div>
            </div>
          ]);

          return;
        } else {
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm">
              <div className="text-red-500 font-bold mb-2">✗ VPS not found!</div>
              <div className="text-gray-400">Please try again.</div>
            </div>
          ]);

          return;
        } 
      } else {
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm">
              <div className="text-red-500 font-bold mb-2">✗ Commit failed!</div>
              <div className="text-gray-400">Please provide a valid email address.</div>
            </div>
          ]);

          return;
      }
    }

    if (listOfCommands.find((command) => command.command === string)) {
      switch (string) {
        case "ls":
          console.log('ls command found');
          break;
        case "cd":
          console.log('cd command found');
          break;
        case "help":
          console.log('help command found');
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm">
              <div className="text-blue-300 mb-2">Available commands:</div>
              <div className="grid grid-cols-2 gap-4">
                {listOfCommands.map((command) => (
                  <div key={command.command} className="flex flex-col">
                    <span className="text-yellow-500">{command.command}</span>
                    <span className="text-gray-400 text-xs">{command.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ]);
          break;
        // Case help <command>
        case "help ls":
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm flex gap-3">
              {listOfCommands.find((command) => command.command === string)?.output?.map((output) => (
                <div className="font-bold">{output.helpCommand}</div>
              ))}
            </div>
          ]);
          break;
        case "info":
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm space-y-4">
              {/* Bio Section */}
              <div>
                <div className="text-blue-300 font-bold mb-2">About Me:</div>
                <div className="text-gray-300 italic">
                  "I'm passionate about learning. I admire creative thinking."
                </div>
              </div>

              {/* Technologies Section */}
              <div>
                <div className="text-blue-300 font-bold mb-2">Technologies:</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center gap-2">
                    <img src="/icons/react-icon.png" alt="React" className="w-4 h-4" />
                    <span className="text-gray-300">React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/icons/typescript-icon.png" alt="TypeScript" className="w-4 h-4" />
                    <span className="text-gray-300">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/icons/tailwind-icon.png" alt="Tailwind" className="w-4 h-4" />
                    <span className="text-gray-300">Tailwind</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/icons/node-icon.png" alt="Node" className="w-4 h-4" />
                    <span className="text-gray-300">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/icons/git-icon.png" alt="Git" className="w-4 h-4" />
                    <span className="text-gray-300">Git</span>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div>
                <div className="text-blue-300 font-bold mb-2">Contact:</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">Email:</span>
                    <a href="mailto:dimajosh1009@gmail.com" className="text-gray-300 hover:text-blue-400">
                      dimajosh1009@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">Phone:</span>
                    <span className="text-gray-300">+39 3207821514</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">GitHub:</span>
                    <a
                      href="https://github.com/MindfulLearner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400"
                    >
                      @MindfulLearner
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">LinkedIn:</span>
                    <a
                      href="http://www.linkedin.com/in/joshua-dimaunahan-473977195"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400"
                    >
                      Joshua Dimaunahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ]);
          break;
        case "neofetch":
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm flex gap-8">
              {/* ASCII Art */}
              <pre className="text-blue-400 text-xs">
                {`              -\`
             .o+\`
            \`ooo/
           \`+oooo:
          \`+oooooo:
          -+oooooo+:
        \`/:-:++oooo+:
       \`/++++/+++++++:
      \`/++++++++++++++:
     \`/+++ooooooooooooo/\`
    ./ooosssso++osssssso+\`
   .oossssso-\`\`\`\`/ossssss+\`
  -osssssso.      :ssssssso.
 :osssssss/        osssso+++.
/ossssssss/        +ssssooo/-
\`/ossssso+        -:/+osssso+-`}

              </pre>

              {/* System Info */}
              <div className="flex flex-col">
                <div>
                  <span className="text-blue-400 font-bold">learner@dimorega-net-ct</span>
                  <span className="text-gray-400">-----------------------</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">OS: </span>
                  <span className="text-gray-300">Arch Linux x86_64</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">Host: </span>
                  <span className="text-gray-300">HP EliteDesk 800 G3 SFF</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">Kernel: </span>
                  <span className="text-gray-300">6.8.4-2-pve</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">Uptime: </span>
                  <span className="text-gray-300">7 hours, 8 mins</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">Packages: </span>
                  <span className="text-gray-300">331 (pacman)</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">Shell: </span>
                  <span className="text-gray-300">zsh 5.9</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">Terminal: </span>
                  <span className="text-gray-300">/dev/pts/11</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">CPU: </span>
                  <span className="text-gray-300">Intel i5-6500 (4) @ 3.600GHz</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">GPU: </span>
                  <span className="text-gray-300">Intel HD Graphics 530</span>
                </div>
                <div>
                  <span className="text-blue-400 font-bold">Memory: </span>
                  <span className="text-gray-300">2413MiB / 8096MiB</span>
                </div>
              </div>
            </div>
          ]);
          break;
        case "clear":
          setTerminalOutput([]); // Resetta l'array di output a vuoto
          break;
        case "credits":
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-sm space-y-4">
              <div className="text-blue-300 font-bold text-xl mb-4">Credits</div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">Developer:</span>
                  <span className="text-gray-300">Joshua Dimaunahan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">Location:</span>
                  <span className="text-gray-300">Milano, Italy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">Portfolio:</span>
                  <span className="text-gray-300">React + TypeScript + Tailwind Portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">Inspiration:</span>
                  <span className="text-gray-300">VSCode + Arch Linux Terminal</span>
                </div>
                <div className="mt-4 text-gray-400 italic">
                  "Thank you for visiting my portfolio. Feel free to explore and get in touch!"
                </div>
              </div>
            </div>
          ]);
          break;
        default:
          console.log('command not found');
          break;
      }
    } else {
      setTerminalOutput((prevOutput) => [
        ...prevOutput,
        <div className="text-red-500 font-mono text-sm">
          <span className="font-bold">Error:</span> Command not found: "{string}"
          <div className="text-gray-400 mt-1">
            Type <span className="text-yellow-500">help</span> to see all available commands.
          </div>
        </div>
      ]);
    }
  };

  // Funzione per gestire il click sul terminale
  const handleTerminalClick = () => {
    commandInputRef.current?.focus();
  };

  return (
    <div
      className="w-full h-[calc(100%-2px)] overflow-y-auto terminal-scroll"
      onClick={handleTerminalClick}
    >
      {/* sezione per riempire un pochino il terminal */}
      <form
        className=" w-full font-mono text-sm h-textsm"
        onSubmit={handleCommandSubmit}
      >
        <div className="flex gap-2">
          <div className="text-red-500">learner</div>
          <div className="text-gray-300">in</div>
          <div className="text-purple-500">dima-portfolio</div>
          <div className="text-gray-300">at</div>
          <div className="text-teal-500">dimorega-net-ct</div>
          <div className="text-gray-300">on</div>
          <div className="text-pink-400">feat/workingonit</div>
          <div className="text-gray-300">...</div>
        </div>
        <div className="flex gap-2">
          <div>➔</div>
          <div className="text-blue-300 font-mono text-sm">
            This is a simple terminal, I wanted to make it because part of my coding journey is thanks to linux and the terminal. I explored different OS and distros, my favorite one is Arch Linux you can see with neofetch.
            To see all the commands that you can use, type "help"
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

export default Terminal1;
