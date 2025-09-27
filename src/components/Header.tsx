import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faSearch, faGear, faSignOut, faSignIn, faBell, faUser, faDownload, faTimes, faMinus, faSquare } from "@fortawesome/free-solid-svg-icons";
import Toast from "./Toast";

interface MenuDropdownProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="relative">
      <li 
        className="cursor-pointer hover:bg-searchbarColor px-2 py-1 rounded transition-colors"
        onClick={onToggle}
      >
        {title}
      </li>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-backgroundTextEditor1 border border-borderColor rounded shadow-lg z-50 min-w-[180px]">
          {items.map((item, index) => (
            <div 
              key={index}
              className="px-3 py-2 text-sm hover:bg-searchbarColor cursor-pointer border-b border-borderColor last:border-b-0"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [toast, setToast] = useState<{message: string, type?: 'info' | 'success' | 'warning' | 'error'} | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const showToast = (message: string, type?: 'info' | 'success' | 'warning' | 'error') => {
    setToast({ message, type });
  };

  const menuItems = {
    file: ["New File", "Open File...", "Open Folder...", "Save", "Save As...", "Save All", "Close", "Exit"],
    edit: ["Undo", "Redo", "Cut", "Copy", "Paste", "Find", "Replace", "Find in Files"],
    select: ["Select All", "Expand Selection", "Shrink Selection", "Select Line", "Select Word"],
    view: ["Command Palette...", "Open View...", "Appearance", "Editor Layout", "Explorer", "Search", "Terminal"],
    go: ["Go to File...", "Go to Symbol...", "Go to Line...", "Go Back", "Go Forward"],
    run: ["Start Debugging", "Run Without Debugging", "Stop", "Restart", "Add Configuration..."],
    terminal: ["New Terminal", "Split Terminal", "Kill Terminal", "Clear", "Select All"],
    help: ["Welcome", "Show All Commands", "Documentation", "Keyboard Shortcuts Reference", "About"]
  };

  const handleMenuToggle = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={headerRef} className="flex justify-between items-center header h-[34px] bg-myVSCodeColor outline outline-1 outline-borderColor">
      {/* parte sinistra con controllo per aprire il file explorer  con icona e i controlli per aprire i file */}
      <div className="flex w-1/3 gap-5 items-center pl-2">
        <div className="w-[20px] h-[20px] cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.location.href = '/'}>
          <img className="w-full h-full" src="/icons/png-fungo-icon.png" alt="Logo" />
        </div>
        <div>
          <ul className="text-sm font-quicksand flex gap-5 text-white">
            <MenuDropdown 
              title="file" 
              items={menuItems.file} 
              isOpen={openMenu === 'file'} 
              onToggle={() => handleMenuToggle('file')} 
            />
            <MenuDropdown 
              title="edit" 
              items={menuItems.edit} 
              isOpen={openMenu === 'edit'} 
              onToggle={() => handleMenuToggle('edit')} 
            />
            <MenuDropdown 
              title="select" 
              items={menuItems.select} 
              isOpen={openMenu === 'select'} 
              onToggle={() => handleMenuToggle('select')} 
            />
            <MenuDropdown 
              title="view" 
              items={menuItems.view} 
              isOpen={openMenu === 'view'} 
              onToggle={() => handleMenuToggle('view')} 
            />
            <MenuDropdown 
              title="go" 
              items={menuItems.go} 
              isOpen={openMenu === 'go'} 
              onToggle={() => handleMenuToggle('go')} 
            />
            <MenuDropdown 
              title="run" 
              items={menuItems.run} 
              isOpen={openMenu === 'run'} 
              onToggle={() => handleMenuToggle('run')} 
            />
            <MenuDropdown 
              title="terminal" 
              items={menuItems.terminal} 
              isOpen={openMenu === 'terminal'} 
              onToggle={() => handleMenuToggle('terminal')} 
            />
            <MenuDropdown 
              title="help" 
              items={menuItems.help} 
              isOpen={openMenu === 'help'} 
              onToggle={() => handleMenuToggle('help')} 
            />
          </ul>
        </div>
      </div>

      {/* parte centrale searchbar con controllo per andare a sinistra e a destra */}
      <div className="flex w-1/3 gap-5 justify-center items-center">
        <div className="flex text-white gap-3">
          <FontAwesomeIcon icon={faArrowLeft} />
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="w-[400px] justify-center bg-searchbarColor rounded-md outline outline-1 outline-gray-500 shadow-lg flex gap-3 items-center text-white">
          <FontAwesomeIcon icon={faSearch} />
          <p className="font-quicksand text-sm">dima-portfolio [SSH: dima@dima-portfolio]</p>
        </div>
      </div>

      {/* parte destra con controllo per uscire dal vscode */}
      <div className="flex justify-end w-1/3 gap-4 pr-3">
        <div className="flex gap-3 text-white text-sm">
          <FontAwesomeIcon 
            icon={faBell} 
            className="cursor-pointer hover:text-blue-400 transition-colors" 
            onClick={() => showToast('Notifications opened', 'info')}
          />
          <FontAwesomeIcon 
            icon={faUser} 
            className="cursor-pointer hover:text-green-400 transition-colors" 
            onClick={() => showToast('User profile accessed', 'success')}
          />
          <FontAwesomeIcon 
            icon={faDownload} 
            className="cursor-pointer hover:text-yellow-400 transition-colors" 
            onClick={() => showToast('Downloads panel opened', 'info')}
          />
          <FontAwesomeIcon 
            icon={faGear} 
            className="cursor-pointer hover:text-gray-400 transition-colors" 
            onClick={() => showToast('Settings panel opened', 'info')}
          />
        </div>
        <div className="flex gap-3 text-white text-sm">
          <FontAwesomeIcon 
            icon={faMinus} 
            className="cursor-pointer hover:text-yellow-400 transition-colors px-1" 
            onClick={() => showToast('Window minimized', 'warning')}
          />
          <FontAwesomeIcon 
            icon={faSquare} 
            className="cursor-pointer hover:text-green-400 transition-colors px-1" 
            onClick={() => showToast('Window maximized', 'success')}
          />
          <FontAwesomeIcon 
            icon={faTimes} 
            className="cursor-pointer hover:text-red-400 transition-colors px-1" 
            onClick={() => showToast('Application closing...', 'error')}
          />
        </div>
      </div>
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
}

export default Header;
