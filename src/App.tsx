import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import ResponsiveLaptopPage from "./components/ResponsivePages/LaptopResponsive/ResponsiveLaptopPage";
import { TabProvider } from './context/TabContext';
import ResponsiveCellphonePage from "./components/ResponsivePages/CellphoneResponsive/ResponsiveCellphonePage";
import { useResponsive } from './hooks/useResponsive';
import { SCREEN_SIZES } from './config/breakpoints';
import MacOSDesktop from './components/MacOSDesktop/MacOSDesktop';
import { motion, AnimatePresence } from 'framer-motion';

export const App = () => {
  const { screenSize } = useResponsive();
  const [showDesktop, setShowDesktop] = useState(true);

  const handleVSCodeClick = () => {
    setShowDesktop(false);
  };

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
        <AnimatePresence mode="wait">
          {showDesktop ? (
            <motion.div
              key="desktop"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-screen"
            >
              <MacOSDesktop onVSCodeClick={handleVSCodeClick} />
            </motion.div>
          ) : (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-screen bg-red-500"
            >
              {renderContent()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TabProvider>
  );
}
