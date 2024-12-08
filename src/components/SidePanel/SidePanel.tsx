import React, { useState, useRef } from "react";
import { arraySkill } from "../data/arraySkill";
import { useTab } from '../../context/TabContext';

interface FileItem {
  name: string;
  type: "file" | "folder";
  children?: FileItem[];
}

function SidePanel() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set([
    "src",
    "src/components",
    "src/components/TextEditorSection",
    "src/components/ResponsivePages",
    "src/components/ResponsivePages/LaptopResponsive",
    "src/components/ResponsivePages/LaptopResponsive/components",
    "src/components/ResponsivePages/LaptopResponsive/components/EditorSection",
    "src/components/data"
  ]));

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  
  const selectedElementRef = useRef<HTMLDivElement>(null);

  const { addTab } = useTab();

  const fileStructure: FileItem[] = [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "App.css", type: "file" },
        { name: "App.test.tsx", type: "file" },
        { name: "App.tsx", type: "file" },
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "BottomSection",
              type: "folder",
              children: [
                { name: "BottomSection.tsx", type: "file" },
                { name: "Terminal1.tsx", type: "file" },
                { name: "Terminal2.tsx", type: "file" }
              ]
            },
            { name: "Footer.tsx", type: "file" },
            { name: "Header.tsx", type: "file" },
            { name: "MainContainer.tsx", type: "file" },
            {
              name: "PublicComponents",
              type: "folder",
              children: [
                {
                  name: "Components",
                  type: "folder",
                  children: [
                    { name: "squareCards.tsx", type: "file" }
                  ]
                },
                {
                  name: "svgtsx",
                  type: "folder",
                  children: [
                    { name: "component-discord-svg.tsx", type: "file" },
                    { name: "component-github-svg.tsx", type: "file" },
                    { name: "component-gmail-svg.tsx", type: "file" },
                    { name: "component-linkedin-svg.tsx", type: "file" },
                    { name: "component-twitter-svg.tsx", type: "file" }
                  ]
                }
              ]
            },
            {
              name: "SidePanel",
              type: "folder",
              children: [
                { name: "SidePanel.tsx", type: "file" }
              ]
            },
            {
              name: "TextEditorSection",
              type: "folder",
              children: [
                { name: "TextEditorPanel1.tsx", type: "file" },
                { name: "TextEditorPanel2.tsx", type: "file" },
                { name: "TextEditorPanel3.tsx", type: "file" },
                { name: "TextEditorPanel4.tsx", type: "file" },
                { name: "TextEditorSection.tsx", type: "file" }
              ]
            },
            {
              name: "data",
              type: "folder",
              children: [
                { name: "ArraySvgComponents.tsx", type: "file" },
                { name: "CarouselWork.tsx", type: "file" },
                { name: "TerminalsArray.tsx", type: "file" },
                { name: "arraySkill.tsx", type: "file" }
              ]
            },
            {
              name: "ResponsivePages",
              type: "folder",
              children: [
                {
                  name: "CellphoneResponsive",
                  type: "folder",
                  children: [
                    { name: "ResponsiveCellphonePage.tsx", type: "file" }
                  ]
                },
                {
                  name: "LaptopResponsive",
                  type: "folder",
                  children: [
                    { name: "ResponsiveLaptopPage.tsx", type: "file" },
                    {
                      name: "components",
                      type: "folder",
                      children: [
                        {
                          name: "EditorSection",
                          type: "folder",
                          children: [
                            { name: "AboutMePanel.tsx", type: "file" },
                            { name: "ContactMePanel.tsx", type: "file" },
                            { name: "SkillCarouselPanel.tsx", type: "file" },
                            { name: "WorkHistoryPanel.tsx", type: "file" }
                          ]
                        },
                        { name: "Maincontainer.tsx", type: "file" },
                        {
                          name: "TerminalBottom",
                          type: "folder",
                          children: [
                            { name: "SideServerSection.tsx", type: "file" },
                            { name: "TerminalLaptop.tsx", type: "file" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "interfaces",
          type: "folder",
          children: [
            { name: "squareInterface.tsx", type: "file" },
            { name: "svgInterface.tsx", type: "file" }
          ]
        },
        { name: "index.css", type: "file" },
        { name: "index.tsx", type: "file" },
        { name: "logo.svg", type: "file" },
        { name: "react-app-env.d.ts", type: "file" },
        { name: "reportWebVitals.ts", type: "file" },
        { name: "setupTests.ts", type: "file" }
      ]
    }
  ];

  const toggleFolder = (folderPath: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(folderPath)) {
        next.delete(folderPath);
      } else {
        next.add(folderPath);
      }
      return next;
    });
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    switch(extension) {
      case 'tsx':
        return "/icons/react-icon.png";
      case 'ts':
        return "/icons/typescript-icon.png";
      case 'js':
      case 'jsx':
        return "/icons/node-icon.png";
      case 'css':
        return "/icons/css-icon.png";
      case 'html':
        return "/icons/html-icon.png";
      case 'svg':
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Color_icon_yellow.svg/2048px-Color_icon_yellow.svg.png";
      case 'png':
      case 'webp':
      case 'jpg':
      case 'jpeg':
        return "/icons/png-fungo-icon.png";
      default:
        return "/icons/react-icon.png";
    }
  };

  const getFolderIcon = (folderName: string) => {
    switch(folderName.toLowerCase()) {
      case 'components':
        return "📦";
      case 'public':
        return "🌐";
      case 'src':
        return "📂";
      case 'data':
        return "📊";
      case 'interfaces':
        return "📋";
      case 'publiccomponents':
        return "🔧";
      case 'bottomsection':
        return "⚡";
      case 'texteditorsection':
        return "📝";
      case 'responsivepages':
        return "📱";
      case 'editorsection':
        return "✏️";
      case 'terminalbottom':
        return "💻";
      case 'cellphoneresponsive':
        return "📱";
      case 'laptopresponsive':
        return "💻";
      default:
        return "📁";
    }
  };

  const getFileStatus = (fileName: string, isFolder: boolean) => {
    // Simuliamo file modificati/nuovi
    const modifiedFiles = [
      "Terminal1.tsx", 
      "TextEditorPanel4.tsx", 
      "src",  // Aggiungiamo src come cartella modificata
      "components"
    ];
    const newFiles = ["TerminalTabs.tsx"];
    
    if (modifiedFiles.includes(fileName)) {
      return (
        <span className={`text-yellow-500 ${isFolder ? 'ml-2' : 'mr-2'}`}>●</span>
      );
    }
    if (newFiles.includes(fileName)) {
      return (
        <span className={`text-green-500 ${isFolder ? 'ml-2' : 'mr-2'}`}>●</span>
      );
    }
    return null;
  };

  const renderFileTree = (items: FileItem[], path: string = "") => {
    return items.map((item) => {
      const currentPath = path ? `${path}/${item.name}` : item.name;
      const isExpanded = expandedFolders.has(currentPath);
      const isSelected = selectedFile === currentPath;

      return (
        <div key={currentPath} className="ml-4">
          <div 
            ref={isSelected ? selectedElementRef : null}
            className={`flex items-center gap-1 px-2 py-0.5 cursor-pointer text-gray-300
              ${isSelected ? 'bg-blue-800' : 'hover:bg-gray-700'}`}
            onClick={(e) => {
              if (item.type === "folder") {
                toggleFolder(currentPath);
              } else {
                setSelectedFile(currentPath);
                addTab(currentPath);
              }
            }}
          >
            {item.type === "folder" && (
              <span className="text-xs">{isExpanded ? "▼" : "▶"}</span>
            )}
            <span className="flex items-center gap-1 text-sm">
              {item.type === "folder" ? (
                <>
                  <span>{getFolderIcon(item.name)}</span>
                  {item.name}
                  {getFileStatus(item.name, true)}
                </>
              ) : (
                <>
                  <img src={getFileIcon(item.name)} alt="file" className="w-4 h-4" />
                  {item.name}
                  {getFileStatus(item.name, false)}
                </>
              )}
            </span>
          </div>
          {item.type === "folder" && isExpanded && item.children && (
            <div>{renderFileTree(item.children, currentPath)}</div>
          )}
        </div>
      );
    });
  };

  React.useEffect(() => {
    if (selectedElementRef.current) {
      selectedElementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [selectedFile]);

  return (
    <div className="w-[250px] h-[calc(100vh-34px-21px)] bg-sidePanelColor overflow-y-auto terminal-scroll">
      <div className="p-2 text-gray-400 text-sm font-semibold">EXPLORER</div>
      {renderFileTree(fileStructure)}
    </div>
  );
}

export default SidePanel;
