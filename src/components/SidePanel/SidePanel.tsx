import React, { useState } from "react";
import { arraySkill } from "../data/arraySkill";

interface FileItem {
  name: string;
  type: "file" | "folder";
  children?: FileItem[];
}

function SidePanel() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["src"]));

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
      case 'ts':
        return "/icons/react-icon.png";
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

  const renderFileTree = (items: FileItem[], path: string = "") => {
    return items.map((item) => {
      const currentPath = path ? `${path}/${item.name}` : item.name;
      const isExpanded = expandedFolders.has(currentPath);

      return (
        <div key={currentPath} className="ml-4">
          <div 
            className="flex items-center gap-1 hover:bg-gray-700 px-2 py-0.5 cursor-pointer text-gray-300"
            onClick={() => item.type === "folder" && toggleFolder(currentPath)}
          >
            {item.type === "folder" && (
              <span className="text-xs">{isExpanded ? "▼" : "▶"}</span>
            )}
            <span className="flex items-center gap-1 text-sm">
              {item.type === "folder" ? (
                <span>📁</span>
              ) : (
                <img src={getFileIcon(item.name)} alt="file" className="w-4 h-4" />
              )}
              {item.name}
            </span>
          </div>
          {item.type === "folder" && isExpanded && item.children && (
            <div>{renderFileTree(item.children, currentPath)}</div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="w-[250px] h-[calc(100vh-34px-21px)] bg-sidePanelColor overflow-y-auto">
      <div className="p-2 text-gray-400 text-sm font-semibold">EXPLORER</div>
      {renderFileTree(fileStructure)}
    </div>
  );
}

export default SidePanel;
