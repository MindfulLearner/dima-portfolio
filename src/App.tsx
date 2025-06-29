import React from "react";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import ResponsiveLaptopPage from "./components/ResponsivePages/LaptopResponsive/ResponsiveLaptopPage";
import { TabProvider } from './context/TabContext';
import ResponsiveCellphonePage from "./components/ResponsivePages/CellphoneResponsive/ResponsiveCellphonePage";
import { useResponsive } from './hooks/useResponsive';
import { SCREEN_SIZES } from './config/breakpoints';

export const App = () => {
  const { screenSize } = useResponsive();

  const renderContent = () => {
    switch (screenSize) {
      case SCREEN_SIZES.mobile:
        return <ResponsiveCellphonePage />;
      case SCREEN_SIZES.laptop:
        return <ResponsiveLaptopPage />;
      case SCREEN_SIZES.desktop:
      default:
        return (
          <>
            <Header />
            <MainContainer />
            <Footer />
          </>
        );
    }
  };

  return (
    <TabProvider>
      <div className="App">
        <div className="w-full h-screen bg-red-500">
          {renderContent()}
        </div>
      </div>
    </TabProvider>
  );
}
