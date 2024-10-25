//text editor panel 2
import React from "react";

function TextEditorPanel2() {
  return (
    <div className="h-1/2 bg-backgroundTextEditor1 border-b border-borderColor  ">
      <div className="w-full flex  bg-emptybarColor">
        {/* barra navigazione */}
        <div className="bg-backgroundTextEditor1 max-w-[200px] pl-2 pr-2 flex h-[31px] items-center gap-2">
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-gray-300">AboutMe.tsx</div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
        {/* questa parte da sistemare  */}
        <div className="bg-emptybarColor max-w-[200px] border-l border-r border-b border-borderColor pl-2 pr-2 flex h-[31px] items-center gap-2">
          <div className="h-6 w-6">
            <img className="p-1" src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-gray-300">ContactMe.tsx</div>
            <div className="text-gray-300">U</div>
            <div className="text-gray-300">x</div>
          </div>
        </div>
      </div>

      <div className="h-[calc(100%-31px)]">
        <div className="h-[calc(100%-250px)]">
          {/* qui ci conterra titolo o messaggi */}
          <div className="text-white text-lg font-bold pl-2 pr-2">
            Reach me
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar h-[250px] gap-5 items-center flex">
          {/* qui conterra cards */}
          <div className="shadow-lg min-w-[130px] min-h-[130px] h-[130px] bg-texteditor2CardsColor flex items-center justify-center">
            <div className="w-[50px] h-[50px]">
              <img src="/icons/png-fungo-icon.png" alt="fungo" />
            </div>
          </div>
          <div className="shadow-lg min-w-[130px] min-h-[130px] h-[130px] bg-texteditor2CardsColor flex items-center justify-center">
            <div className="w-[50px] h-[50px]">
              <img src="/icons/png-fungo-icon.png" alt="fungo" />
            </div>
          </div>
          <div className="shadow-lg min-w-[130px] min-h-[130px] h-[130px] bg-texteditor2CardsColor flex items-center justify-center">
            <div className="w-[50px] h-[50px]">
              <img src="/icons/png-fungo-icon.png" alt="fungo" />
            </div>
          </div>
          <div className="shadow-lg min-w-[130px] min-h-[130px] h-[130px] bg-texteditor2CardsColor flex items-center justify-center">
            <div className="w-[50px] h-[50px]">
              <img src="/icons/png-fungo-icon.png" alt="fungo" />
            </div>
          </div>
          <div className="shadow-lg min-w-[130px] min-h-[130px] h-[130px] bg-texteditor2CardsColor flex items-center justify-center">
            <div className="w-[50px] h-[50px]">
              <img src="/icons/png-fungo-icon.png" alt="fungo" />
            </div>
          </div>
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

export default TextEditorPanel2;
