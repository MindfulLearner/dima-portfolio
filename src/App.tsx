import React from "react";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="App">
      <div className="w-full h-screen bg-red-500">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    </div>
  );
}
