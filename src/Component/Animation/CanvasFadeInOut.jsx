// src/CanvasFadeInOut.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const CanvasFadeInOut = () => {
  const canvasRef = useRef(null);
  const {Text} = useContext(Shared)
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const text = Text
    let y = canvas.height / 2;
    let alpha = 1.0; // Initial opacity
    let fadingOut = true; // Direction of fading

    const fade = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
      ctx.globalAlpha = alpha; // Set global alpha (opacity)
      ctx.font = '30px Arial';
      const textWidth = ctx.measureText(text).width;
      const x = (canvas.width - textWidth) / 2;
      ctx.fillText(text,x,y);

      // Update alpha
      if (fadingOut) {
        alpha -= 0.01;
        if (alpha <= 0) fadingOut = false;
      } else {
        alpha += 0.01;
        if (alpha >= 1) fadingOut = true;
      }

      requestAnimationFrame(fade);
    };

    fade(); // Start the animation
  }, []);

  return (
    <canvas ref={canvasRef} width={600} height={150}/>
  );
};

export default CanvasFadeInOut;
