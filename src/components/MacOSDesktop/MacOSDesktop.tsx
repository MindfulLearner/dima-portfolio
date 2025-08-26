import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MacOSDesktopProps {
  onVSCodeClick: () => void;
}

const MacOSDesktop: React.FC<MacOSDesktopProps> = ({ onVSCodeClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [terminalStep, setTerminalStep] = useState(0);

  const desktopIcons = [
    { name: 'VSCode', icon: '/favicon.ico', x: 200, y: 150 },
    { name: 'React', icon: '/icons/react-icon.png', x: 300, y: 150 },
    { name: 'TypeScript', icon: '/icons/typescript-icon.png', x: 400, y: 150 },
    { name: 'Next.js', icon: '/icons/next-icon.png', x: 200, y: 250 },
    { name: 'Node.js', icon: '/icons/node-icon.png', x: 300, y: 250 },
    { name: 'Git', icon: '/icons/git-icon.png', x: 400, y: 250 },
    { name: 'Tailwind', icon: '/icons/tailwind-icon.png', x: 500, y: 150 },
    { name: 'Docker', icon: '/icons/docker-icon.png', x: 500, y: 250 },
  ];


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      // Anima il mouse verso l'icona del terminale nel dock (centro schermo + offset)
      setMousePosition({ x: window.innerWidth / 2 - 50, y: window.innerHeight - 60 });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (terminalStep === 1) {
      // Typing animation for "code ."
      const command = 'code .';
      let index = 0;
      const typingTimer = setInterval(() => {
        if (index <= command.length) {
          setTerminalText(command.substring(0, index));
          index++;
        } else {
          clearInterval(typingTimer);
          // Execute command after typing
          setTimeout(() => {
            setTerminalStep(2);
            setTimeout(() => {
              onVSCodeClick();
            }, 500);
          }, 500);
        }
      }, 100);
      return () => clearInterval(typingTimer);
    }
  }, [terminalStep, onVSCodeClick]);

  const handleMouseAnimationComplete = () => {
    // Apre il terminale
    setShowTerminal(true);
    setTimeout(() => {
      setTerminalStep(1);
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-backgroundTextEditor1 overflow-hidden">
      {/* macOS Desktop Background - Dark theme pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23313131' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* macOS Menu Bar */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-emptybarColor backdrop-blur-md border-b border-borderColor">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center space-x-4">
            <div className="text-gray-300 text-sm font-quicksand font-medium">🍎</div>
            <div className="text-gray-300 text-sm font-quicksand">Finder</div>
          </div>
          <div className="text-gray-300 text-sm font-quicksand">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="relative pt-8">
        {desktopIcons.map((icon, index) => (
          <motion.div
            key={icon.name}
            className="absolute"
            style={{ left: icon.x, top: icon.y }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-searchbarColor hover:bg-opacity-50 transition-colors cursor-pointer">
              <div className="w-16 h-16 bg-emptybarColor bg-opacity-80 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg border border-borderColor">
                <img 
                  src={icon.icon} 
                  alt={icon.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-gray-300 text-xs font-quicksand font-medium text-center px-1 py-0.5 bg-emptybarColor bg-opacity-80 rounded backdrop-blur-sm border border-borderColor">
                {icon.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* macOS Dock */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="bg-backgroundTextEditor1 bg-opacity-80 backdrop-blur-md rounded-2xl px-4 py-2 border border-borderColor shadow-2xl">
          <div className="flex items-center space-x-3">
            {/* Finder */}
            <div className="w-12 h-12 bg-sshColor rounded-lg flex items-center justify-center text-white text-lg hover:bg-opacity-80 transition-colors">
              📁
            </div>
            {/* Terminal */}
            <motion.div 
              className="w-12 h-12 bg-emptybarColor rounded-lg flex items-center justify-center text-gray-300 text-lg cursor-pointer relative hover:bg-searchbarColor transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              💻
              {/* Click effect for terminal */}
              {isAnimating && (
                <motion.div
                  className="absolute inset-0 bg-sshColor bg-opacity-50 rounded-lg"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: [0, 1, 0] }}
                  transition={{ delay: 2.5, duration: 0.3 }}
                  onAnimationComplete={handleMouseAnimationComplete}
                />
              )}
            </motion.div>
            {/* Chrome */}
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 via-yellow-400 to-green-400 rounded-lg flex items-center justify-center text-white text-lg hover:bg-opacity-80 transition-colors">
              🌐
            </div>
            {/* VSCode */}
            <div className="w-12 h-12 bg-sshColor rounded-lg flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <img src="/favicon.ico" alt="VSCode" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Window */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64"
          >
            <div className="bg-backgroundTextEditor1 rounded-lg shadow-2xl border border-borderColor overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-emptybarColor px-4 py-3 flex items-center justify-between border-b border-borderColor">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-300 text-sm font-quicksand font-medium">Terminal</div>
                <div></div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm">
                <div className="text-sshColor mb-2 font-quicksand">
                  dima@macbook-pro:~/portfolio$ 
                </div>
                <div className="text-gray-300">
                  <span className="text-sshColor font-quicksand">dima@macbook-pro:~/portfolio$</span>
                  <span className="ml-1 font-quicksand">{terminalText}</span>
                  <motion.span
                    className="inline-block w-2 h-5 bg-gray-300 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                </div>
                {terminalStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-300 mt-2 font-quicksand"
                  >
                    Opening VSCode...
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Mouse Cursor */}
      <motion.div
        className="absolute pointer-events-none z-50"
        animate={{ 
          x: mousePosition.x - 8, 
          y: mousePosition.y - 8 
        }}
        transition={{ 
          duration: isAnimating ? 1.5 : 0,
          ease: "easeInOut",
          delay: isAnimating ? 0 : 0
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="drop-shadow-lg">
          <path
            d="M3 3l7.5 13.5L13 14l3.5-3.5L3 3z"
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        
        {/* Click animation */}
        {isAnimating && (
          <motion.div
            className="absolute -top-1 -left-1 w-6 h-6 border-2 border-white rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ delay: 2.5, duration: 0.3 }}
          />
        )}
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="text-gray-300 text-lg font-quicksand font-medium bg-backgroundTextEditor1 bg-opacity-80 px-4 py-2 rounded-lg backdrop-blur-sm border border-borderColor">
          Welcome to Dima's Portfolio
        </div>
      </motion.div>
    </div>
  );
};

export default MacOSDesktop;