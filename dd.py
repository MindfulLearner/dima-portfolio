import os

# Set project_root to the current directory
project_root = os.getcwd()

# Directory structure (subdirectories relative to the current directory)
directories = [
    os.path.join(project_root, 'src', 'components'),
    os.path.join(project_root, 'src', 'components', 'TextEditorSection'),  # New sub-directory for TextEditorSection
    os.path.join(project_root, 'src', 'components', 'BottomSection'),  # New sub-directory for BottomSection
    os.path.join(project_root, 'src', 'components', 'SideTerminal')  # New sub-directory for SideTerminal
]

# Files with their content
files_content = {
    os.path.join(project_root, 'src', 'App.tsx'): """import React from "react";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="App">
      <div className="w-full h-screen bg-red-500">
        <Header />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
""",
    os.path.join(project_root, 'src', 'components', 'Header.tsx'): """import React from "react";

function Header() {
  return <div className="header h-[34px] bg-blue-500">header</div>;
}

export default Header;
""",
    # TextEditorSection components
    os.path.join(project_root, 'src', 'components', 'TextEditorSection', 'TextEditorSection.tsx'): """import React from "react";
import TextEditorPanel1 from "./TextEditorPanel1";
import TextEditorPanel2 from "./TextEditorPanel2";

function TextEditorSection() {
  return (
    <div className="flex h-[calc(100%-220px)] bg-yellow-500">
      <div className="h-full w-[35%] bg-red-500">
        <TextEditorPanel1 />
        <TextEditorPanel2 />
      </div>
      <div className="h-full w-[65%] bg-orange-500">
        <TextEditorPanel1 />
        <TextEditorPanel2 />
      </div>
    </div>
  );
}

export default TextEditorSection;
""",
    os.path.join(project_root, 'src', 'components', 'TextEditorSection', 'TextEditorPanel1.tsx'): """import React from "react";

function TextEditorPanel1() {
  return <div className="h-1/2 bg-red-500">horizontal container 1 text editor</div>;
}

export default TextEditorPanel1;
""",
    os.path.join(project_root, 'src', 'components', 'TextEditorSection', 'TextEditorPanel2.tsx'): """import React from "react";

function TextEditorPanel2() {
  return <div className="h-1/2 bg-purple-500">horizontal container 2 text editor</div>;
}

export default TextEditorPanel2;
""",
    # BottomSection components
    os.path.join(project_root, 'src', 'components', 'BottomSection', 'BottomSection.tsx'): """import React from "react";

function BottomSection() {
  return (
    <div className="flex h-[220px] bg-yellow-500">
      <div className="w-1/2 h-full bg-red-500">vertical container 1</div>
      <div className="w-1/2 h-full bg-purple-500">terminal 1</div>
    </div>
  );
}

export default BottomSection;
""",
    # SideTerminal components
    os.path.join(project_root, 'src', 'components', 'SideTerminal', 'SideTerminal.tsx'): """import React from "react";

function SideTerminal() {
  return <div className="w-[15%] h-[calc(100vh-34px)] bg-green-500">terminale 2</div>;
}

export default SideTerminal;
""",
    # MainContainer component
    os.path.join(project_root, 'src', 'components', 'MainContainer.tsx'): """import React from "react";
import TextEditorSection from "./TextEditorSection/TextEditorSection";
import BottomSection from "./BottomSection/BottomSection";
import SideTerminal from "./SideTerminal/SideTerminal";

function MainContainer() {
  return (
    <div className="flex">
      <div className="w-[85%] h-[calc(100vh-34px)] bg-blue-500">
        <TextEditorSection />
        <BottomSection />
      </div>
      <SideTerminal />
    </div>
  );
}

export default MainContainer;
"""
}

# Create directories
for directory in directories:
    os.makedirs(directory, exist_ok=True)

# Create files with content
for filepath, content in files_content.items():
    with open(filepath, 'w') as file:
        file.write(content)

f"Project has been created in the current directory with the necessary folder and file structure."
