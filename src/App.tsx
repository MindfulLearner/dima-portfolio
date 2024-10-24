import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      {/* this container will wrap and will be 100vh */}
      <div className="w-full h-screen bg-red-500">
        {/* Header */}
        <div className="header h-[34px] bg-blue-500">header</div>
        {/* Vertical container for 1 and 2 */}
        <div className="flex">
          <div className="w-1/2 h-[calc(100vh-34px)] bg-blue-500">
            <div className="flex h-[calc(100%-259px)] bg-yellow-500">
              <div className="h-full w-1/2 bg-red-500">
                <div className="h-1/2 bg-red-500">
                horizontal container 1
                </div>
                <div className="h-1/2 bg-purple-500">
                  horizontal container 2
                </div>
              </div>
              <div className="h-full w-1/2 bg-orange-500">
                <div className="h-1/2 bg-yellow-500">
                  horizontal container 1
                </div>
                <div className="h-1/2 bg-teal-500">
                horizontal container 2
                </div>
              </div>
            </div>
            <div className="h-[259px] bg-yellow-500">
              <div className="w-1/2 h-full bg-red-500">vertical container 1</div>
              <div className="w-1/2 h-full bg-purple-500">
                vertical container 2
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[calc(100vh-34px)] bg-green-500">
            vertical container 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
