// empty array for terminal 1
// this array will be used to store the commands that the user can type in the terminal
export const TerminalArray = [];


// list of commands that the user can type in the terminal
/**
 * this array is a list of commands that the user can type in the terminal
 * with these commands you can print arrays, get more information about the project, clear the terminal and play a minigame where you can choose a number between 1 to 6 and try to win against the computer, or you can get cool quotes with an api call, or suggest you music to listen.
 */
export const TerminaleListOfCommands = [
  { command: "info", description: "show more information about the project" },
 
  { 
    command: "help", 
    description: "show all the commands that you can use", 
    output: [
      { helpCommand: "ls", showInfo: "show all the folders" }, 
      { helpCommand: "cd", showInfo: "change the current directory" }, 
      { helpCommand: "help", showInfo: "show all the commands that you can use" }, 
      { helpCommand: "clear", showInfo: "clear the terminal" }, 
      { helpCommand: "cat", showInfo: "show the content of a file" }, 
      { helpCommand: "diceroll", showInfo: "roll a dice of D&D where the number is between 1 to 20" }, 
      { helpCommand: "cbonsai", showInfo: "inspired from a GitHub repository of Arch Linux: https://github.com/mhzawadi/homebrew-cbonsai" }, 
      { helpCommand: "neofetch", showInfo: "show your system information" }, 
      { helpCommand: "quotes", showInfo: "get a cool quote" }, 
      { helpCommand: "music", showInfo: "suggest you music to listen" }, 
      { helpCommand: "credits", showInfo: "show the credits of the project" }, 
      { helpCommand: "info", showInfo: "show more information about the project" }
    ] 
  },
  { command: "git", description: "There's a feature where you can commit to the github repository of the project type help git to see how to use it" },
  { command: "ls", description: "show all the folders in the current directory" },
 { command: "cd", description: "change the current directory" },
  { command: "clear", description: "clear the terminal" },
  { command: "cat", description: "show the content of a file" },
  { command: "diceroll", description: "roll a dice of D&D where the number is between 1 to 20" },
  { command: "cbonsai", description: "inspirated from a github repository of archlinux https://github.com/mhzawadi/homebrew-cbonsai" },
  { command: "neofetch", description: "show your system information" },
  { command: "quotes", description: "get a cool quote from an API" },
  { command: "music", description: "suggest you music to listen from spotify API" },
  { command: "credits", description: "show the credits of the project" },
];

// la chiamata API per per la musica e' un casino ahha
// https://developer.spotify.com/documentation/web-api/tutorials/getting-started