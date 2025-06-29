import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import SidePanel from "./components/SidePanel/SidePanel";
import ResponsiveLaptopPage from "./components/ResponsivePages/LaptopResponsive/ResponsiveLaptopPage";
import { TabProvider } from './context/TabContext';
import ResponsiveCellphonePage from "./components/ResponsivePages/CellphoneResponsive/ResponsiveCellphonePage";

export const App = () => {
  const [isLaptop, setIsLaptop] = useState(false);
  const [isCellphone, setIsCellphone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
    setIsLaptop(window.innerWidth < 1485);
    setIsCellphone(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <TabProvider>
      <div className="App">
        <div className="w-full h-screen bg-red-500">
          {isLaptop ? <ResponsiveLaptopPage /> : <>
            <Header />
            <MainContainer />
            <Footer />
          </>}

          {isCellphone ? <ResponsiveCellphonePage /> : <>
            <Header />
            <MainContainer />
            <Footer />
          </>}
        </div>
      </div>
    </TabProvider>
  );
}
