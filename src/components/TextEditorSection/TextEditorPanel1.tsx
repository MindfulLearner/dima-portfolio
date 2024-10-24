import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function TextEditorPanel1() {
  return (
    <div className="h-1/2 bg-backgroundTextEditor1">
      <div className="w-full bg-red-500">
        {/* barra navigazione */}
        <div className="bg-blue-500 min-w-[30px] flex h-[31px] items-center gap-2">
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center gap-2">
            <div>Presentation.tsx</div>
            <div>U</div>
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>
      </div>

      <div className="p-10 h-[calc(100%-31px)]">
        <h1 className="text-5xl font-bold">Hello.</h1>
        <h2 className="text-xl font-bold mt-2">I'm Joshua</h2>
        <div className="flex mt-2">
          <p>
            I'm a software developer learner, based in Italy, Milan. This is my
            portfolio and everything you see here is interactive.
          </p>
        </div>
      </div>

      {/* in hoover */}
      {/* <div>
        <p>
          Making good questions and answers is the key of human progress,
          grateful on learning new things.
        </p>
        <div className="flex gap-2 items-center">
          <div className="rounded-full h-8 w-8">
            <img
              className="p-1"
              src="/icons/png-fungo-icon.png"
              alt="fungo"
            />
          </div>
          <div>Joshua Dimaunahan</div>
          <div>- Software Engineer</div>
        </div>
      </div> */}
    </div>
  );
}

export default TextEditorPanel1;
