import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronDown, faChevronUp, faX } from "@fortawesome/free-solid-svg-icons";
import Terminal1 from "./Terminal1";
import Terminal2 from "./Terminal2";

function BottomSection() {

  return (
    <div className="h-[220px] bg-bottomSectionColor">
      <div className="flex justify-between h-[34px] bg-bottomSectionColor text-white text-sm pl-5">
        <ul className="justify-center items-center flex gap-5">
          <li>PROBLEMS</li>
          <li>OUTPUT</li>
          <li>DEBUG CONSOLE</li>
          <li>TERMINAL</li>
          <li>PORTS</li>
        </ul>
        <ul className="flex gap-2">
          <li className="flex gap-2 items-center">
            <div className="h-4 w-4">
              <img className="w-full h-full" src="/icons/png-fungo-icon.png" alt="" />
            </div>
            <div>install-dima portfolio</div>
          </li>
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faChevronDown} />
          </li>
          {/* qua dentro ci saranno anche cestino + 3 puntini chevroleup e x per chiusura */}
          <li className="flex gap-2 items-center">
            <div className="h-4 w-4">
              <img className="w-full h-full" src="/icons/png-fungo-icon.png" alt="" />
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="h-4 w-4">
              <img className="w-full h-full" src="/icons/png-fungo-icon.png" alt="" />
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="h-4 w-4">
              <img className="w-full h-full" src="/icons/png-fungo-icon.png" alt="" />
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faChevronUp} />
          </li>
          <li className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faX} />
          </li>
        </ul>
      </div>
      <div className="flex h-[calc(100%-34px)]">
        <div className="w-1/2 h-full bg-bottomSectionColor text-white border-r border-borderColor pl-5">
         <Terminal1 />
        </div>
        <div className="justify-between flex w-1/2 h-full bg-bottomSectionColor text-white pl-5">
          <Terminal2 />
          <div className="pl-2 border-l border-borderColor flex flex-col gap-2">
            <div>install dima portfolio</div>
            <div>node dima</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
