// src/CanvasGlitch.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const CanvasGlitch = () => {
  const canvasRef = useRef(null);
  const lastGlitchTime = useRef(0);
  const glitchInterval = 100; // Glitch every 100 ms
  const {Text} = useContext(Shared)

  useEffect(() => {
    const canvas = canvasRef.current; 
    const ctx = canvas.getContext('2d');
    const text = Text;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const textHeight = 40;

    const drawText = (offsetX = 0, color = 'white', alpha = 1, dy = 0) => {
      ctx.save();
      ctx.font = `${textHeight}px Arial`;
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      const textWidth = ctx.measureText(text).width;
      ctx.fillText(text, centerX - textWidth / 2 + offsetX, centerY + dy);
      ctx.restore();
    };

    const glitch = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Normal text
      drawText();

      // Glitched text
      for (let i = 0; i < 5; i++) {
        const glitchOffsetX = (Math.random() - 0.5) * 20;
        const glitchAlpha = Math.random() * 0.4 + 0.2;
        const glitchColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        const glitchDy = (Math.random() - 0.5) * 10;
        drawText(glitchOffsetX, glitchColor, glitchAlpha, glitchDy);
      }

      // Schedule next glitch
      requestAnimationFrame(glitch);
    };

    const animate = (timestamp) => {
      if (timestamp - lastGlitchTime.current > glitchInterval) {
        glitch();
        lastGlitchTime.current = timestamp;
      } else {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={600} height={150}  />;
};

export default CanvasGlitch;
