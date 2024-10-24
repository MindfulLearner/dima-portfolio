import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faSearch, faGear, faSignOut, faSignIn } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex justify-between items-center header h-[34px] bg-myVSCodeColor outline outline-1 outline-gray-400">
      {/* parte sinistra con controllo per aprire il file explorer  con icona e i controlli per aprire i file */}
      <div className="flex w-1/3 gap-5 items-center pl-2">
        <div className="w-[20px] h-[20px]">
          <img className="w-full h-full" src="/icons/png-fungo-icon.png" alt="" />
        </div>
        <div>
          <ul className="flex gap-5 text-white">
            <li>file</li>
            <li>edit</li>
            <li>select</li>
            <li>view</li>
            <li>go</li>
            <li>run</li>
            <li>terminal</li>
            <li>help</li>
          </ul>
        </div>
      </div>

      {/* parte centrale searchbar con controllo per andare a sinistra e a destra */}
      <div className="flex w-1/3 gap-5 justify-center items-center">
        <div className="flex text-white gap-3">
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="w-[400px] justify-center bg-searchbarColor rounded-md outline outline-1 outline-gray-400 flex gap-3 items-center text-white">
          <FontAwesomeIcon icon={faSearch} />
          <p>dima-portfolio [SSH: dima@dima-portfolio]</p>
        </div>
      </div>

      {/* parte destra con controllo per uscire dal vscode */}
      <div className="flex justify-end w-1/3 gap-4 pr-3">
        <div className="flex gap-3 text-white text-lg">
          <FontAwesomeIcon icon={faGear} />
          <FontAwesomeIcon icon={faGear} />
          <FontAwesomeIcon icon={faGear} />
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="flex gap-5 text-white">
          <FontAwesomeIcon icon={faSignOut} />
          <FontAwesomeIcon icon={faSignIn} />
          <FontAwesomeIcon icon={faSignOut} />
        </div>
      </div>
    </div>
  );
}

export default Header;
