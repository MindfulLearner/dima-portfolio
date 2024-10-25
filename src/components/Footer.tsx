//footer
import React from "react";
import {
  faChevronDown,
  faChevronUp,
  faX,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="h-[21px] bg-footerColor border-t border-borderColor flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="h-full  bg-sshColor text-white text-sm w-[160px] justify-center flex items-center gap-2">
          <div className="w-[15px] h-[15px]">
            <img src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="font-quicksand text-white text-center text-sm">
            SSH: 192.168.1.100
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-[15px] h-[15px]">
            <img src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div className="font-quicksand text-white text-center text-sm">master*</div>
        </div>
        <div>
          <div className="w-[15px] h-[15px]">
            <img src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
        </div>
      </div>
      <div className="font-quicksand flex gap-5 items-center text-xs text-white pr-2">
        <div>div {">"} div</div>
        <div>Spaces:2</div>
        <div>UTF-8</div>
        <div>LF</div>
        <div>{"{}"}</div>
        <div>typescript JSX</div>
        <div className="flex gap-2 items-center">
          <div className="w-[15px] h-[15px]">
            <img src="/icons/png-fungo-icon.png" alt="fungo" />
          </div>
          <div>Prettier</div>
        </div>
        <div className="w-[15px] h-[15px]">
          <img src="/icons/png-fungo-icon.png" alt="fungo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
