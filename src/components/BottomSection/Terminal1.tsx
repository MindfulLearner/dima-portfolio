import React, { useRef, useState, useEffect } from "react";
import { TerminaleListOfCommands } from "../data/TerminalsArray";

function Terminal1() {

  // email state
  const [, setEmail] = useState("");

  // loading state for API calls
  const [isLoading, setIsLoading] = useState(false);

  // cooldown state for git commit
  const [lastCommitTime, setLastCommitTime] = useState<number | null>(null);
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);
  const COOLDOWN_DURATION = 10; // 10 seconds cooldown

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
   * Handle cooldown countdown
   */
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (cooldownRemaining > 0) {
      interval = setInterval(() => {
        setCooldownRemaining(prev => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [cooldownRemaining]);

  /**
   * Handle the submit of the command input
   */
  const handleCommandSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Don't process commands if loading
    if (isLoading) {
      return;
    }

    const previousCommand = commandInputRef.current?.value?.trim();

    if (previousCommand) {

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

  const [, setPrUrl] = useState<string>("");

  /**
   * this will check if the email is valid
   * @param email the email to check
   * @returns true if the email is valid, false otherwise
   */
  // TODO: use push after commit
  const isFetchedGitCommit = async (email: string) => {
    setIsLoading(true);

    let fetchFailed = false;

    const simulateGitCommands = async () => {
      const commands = [
        { cmd: "➔ git push", delay: 100, color: "text-red-500" },
        { cmd: "➔ Enumerating objects: 16, done.", delay: 120, color: "text-orange-500" },
        { cmd: "➔ Counting objects: 100% (16/16), done.", delay: 150, color: "text-yellow-500" },
        { cmd: "➔ Compressing objects: 100% (12/12), done.", delay: 180, color: "text-green-500" },
        { cmd: "➔ Total 16 (delta 11), reused 5 (delta 4), pack-reused 0 (from 0)", delay: 200, color: "text-blue-500" },
        { cmd: "➔ Unpacking objects: 100% (16/16), 2.98 KiB | 277.00 KiB/s, done.", delay: 220, color: "text-indigo-500" },
        { cmd: "➔ remote: Total 16 (delta 11), reused 5 (delta 4), pack-reused 0 (from 0)", delay: 240, color: "text-violet-500" },
        { cmd: `➔ git push origin origin/dima-portfolio/contribution-${email.split("@")[0]}`, delay: 260, color: "text-red-300" },
        { cmd: "➔ Creating Pull Request... , If you liked it, feel free to leave a star!", delay: 280, color: "text-orange-500" },
        { cmd: `➔ Thank you ${email.split("@")[0]} for your contribution! Click the link below to view and comment on the Pull Request:`, delay: 300, color: "text-yellow-500" },
        { cmd: `➔ Keep on Learning!`, delay: 320, color: "text-green-300" }
      ];

      for (const command of commands) {
        if (fetchFailed) {
          simulateErrorGitCommands();
          break
        }
        setTerminalOutput((prevOutput) => [
          ...prevOutput,
          <div className={`font-mono font-bold text-md ${command.color}`}>
            <div>{command.cmd}</div>
          </div>
        ]);

        await new Promise(resolve => setTimeout(resolve, command.delay));
      }
    };

    const simulateErrorGitCommands = async () => {
      const commands = [
        { cmd: "➔ Error: Failed to push some refs to 'https://github.com/MindfulLearner/dima-portfolio.git'", delay: 100, color: "text-red-500" },
        { cmd: "➔ Error: Try again later, could be the server is down or is having issues", delay: 120, color: "text-red-500" },
        { cmd: "➔ Error: I suggest you to open an issue on the repository", delay: 150, color: "text-red-500" },
        { cmd: "➔ Error: Link for issue: https://github.com/MindfulLearner/dima-portfolio/issues", delay: 180, color: "text-red-500" },
        { cmd: "➔ ✗ Lambda API Gateway Failed!", delay: 200, color: "text-red-500" },
        { cmd: "➔ Error: Please try again.", delay: 220, color: "text-red-500" },
      ];

      for (const command of commands) {
        setTerminalOutput((prevOutput) => [
          ...prevOutput,
          <div className={`font-mono font-bold text-md ${command.color}`}>
            <div>{command.cmd}</div>
          </div>
        ]);

        await new Promise(resolve => setTimeout(resolve, command.delay));
      }
    };

    const gitCommandsPromise = simulateGitCommands();

    try {

      const response = await fetch(`https://8q1velhs9i.execute-api.eu-west-3.amazonaws.com/default/prCallerV2`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: email.split("@")[0],
          email: email,
          date: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      setPrUrl(data.pr_url);

      await gitCommandsPromise;

      if (response.ok) {
        return { ok: true, prUrl: data.pr_url };
      } else {
        return { ok: false, prUrl: "" };
      }
    } catch (error) {
      fetchFailed = true;
      await gitCommandsPromise;
      return { ok: false, prUrl: "" };
    } finally {
      setIsLoading(false);
    }
  };

  const inputCommandHandler = async (string: string) => {
    // this will handle the input command

    const removeLastSpaces = string.replace(/\s+$/, '');
    const gitCommitRegex = /^git commit -m "(.+?)"$/;
    const isEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // check if the string is a valid email
    const isGitCommitMatch = gitCommitRegex.test(removeLastSpaces);

    if (isGitCommitMatch) {
      // check if the user has already committed in the last 10 seconds
      const now = Date.now();
      const timeSinceLastCommit = lastCommitTime ? now - lastCommitTime : Infinity;
      const remainingCooldown = Math.max(0, COOLDOWN_DURATION * 1000 - timeSinceLastCommit);
      
      if (remainingCooldown > 0) {
        const remainingSeconds = Math.ceil(remainingCooldown / 1000);
        setCooldownRemaining(remainingSeconds);
        setTerminalOutput((prevOutput) => [
          ...prevOutput,
          <div className="text-white font-mono text-sm">
            <div className="text-red-500 font-bold mb-2">✗ Commit failed!</div>
            <div className="text-gray-400">You already did a commit. Please wait {remainingSeconds} second{remainingSeconds !== 1 ? 's' : ''} before trying again.</div>
          </div>
        ]);
        return;
      }

      const emailAdjusted = string.split(" ")[3].replace(/"/g, '');
      const isEmailMatch = isEmailRegex.test(emailAdjusted);
      if (isEmailMatch) {
        // Set the commit time when starting the commit process
        setLastCommitTime(now);
        const result = await isFetchedGitCommit(emailAdjusted);
        if (result.ok) {
          setEmail(emailAdjusted);
          setTerminalOutput((prevOutput) => [
            ...prevOutput,
            <div className="text-white font-mono text-md font-bold">
              <div className="text-green-500 font-bold mb-2">✓ Pull Request created successfully!</div>
              <div className="text-blue-300 mt-2">Thank you for your contribution! Click the link below to view and <span className="text-green-500 text-bold text-lg">➔ comment</span> on the Pull Request: </div>
              <div className="mt-2">
                <a href={result.prUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  🔗 {result.prUrl}
                </a>
              </div>
              <div className="flex gap-2 text-blue-300">
                <div>🎉</div>
                <div>Also if you didn't know, If you're new, you're getting the "Pair Extraordinaire" badge achievements on GitHub!</div>
              </div>
              <div>
                <div className="flex gap-2 text-green-300">
                  <div>💡</div>
                  <div>Remind that if you want to the PR to be merged, you need to comment on the PR. You will also get email notification when the PR is merged.</div>
                  <div>💌</div>
                </div>
              </div>
              <div className="text-gray-300">
                If you appreciate my work, feel free to leave a <span className="text-yellow-500">star</span>! ⭐
                <a href="https://github.com/MindfulLearner/dima-portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  https://github.com/MindfulLearner/dima-portfolio
                </a>
              </div>
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
      return;
    }

    if (listOfCommands.find((command) => command.command === string)) {
      switch (string) {
        case "ls":
          break;
        case "cd":
          break;
        case "help":
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
                {`
                    -@                
                   .##@               
                  .####@              
                  @#####@             
                . *######@            
               .##@o@#####@           
              /############@          
             /##############@         
            @######@**%######@        
           @######      %#####o       
          @######@       ######%      
        -@#######         ######@.    
       /#####h**          **%@####@   
      @H@*                      *%#@  
     *                              *                          
`}

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
      {isLoading ? (
        <div className="flex items-center gap-2 text-yellow-500">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-500"></div>
          <input
            type="text"
            className="bg-transparent outline-none w-full"
            placeholder="Fetching..."
            ref={commandInputRef}
            disabled
          />
        </div>
      ) : (
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
            {cooldownRemaining > 0 && (
              <div className="text-red-500 text-xs flex items-center gap-1">
                <span>⏰</span>
                <span>{cooldownRemaining}s</span>
              </div>
            )}
            <input
              type="text"
              className="bg-transparent outline-none w-full"
              placeholder={cooldownRemaining > 0 ? `Cooldown active (${cooldownRemaining}s remaining)` : "Type your command..."}
              ref={commandInputRef}
              disabled={cooldownRemaining > 0}
            />
          </div>
          <button type="submit" className="hidden"></button>
        </form>
      )}
    </div>
  );
}

export default Terminal1;
