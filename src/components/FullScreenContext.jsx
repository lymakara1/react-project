import React, { createContext, useRef, useContext } from "react";

const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
  const canvasRef = useRef(null);

  const handleFullScreen = () => {
    const canvas = canvasRef.current;
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.mozRequestFullScreen) {
      // Firefox
      canvas.mozRequestFullScreen();
    } else if (canvas.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) {
      // IE/Edge
      canvas.msRequestFullscreen();
    }
  };

  return (
    <FullScreenContext.Provider value={{ canvasRef, handleFullScreen }}>
      {children}
    </FullScreenContext.Provider>
  );
};

export const useFullScreen = () => useContext(FullScreenContext);
