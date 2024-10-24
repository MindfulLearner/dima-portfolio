import React from "react";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

export const App = () => {
  return (
    <div className="App">
      <div className="w-full h-screen bg-red-500">
        <Header />
        <MainContainer />
      </div>
    </div>
  );
}
