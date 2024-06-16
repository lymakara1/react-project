// src/CanvasNeon.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const CanvasNeon = () => {
  const canvasRef = useRef(null);
  const {Text} = useContext(Shared)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const text = Text
    const textHeight = 80;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const colors = ['#f0f', '#0ff', '#ff0', '#f00', '#0f0', '#00f'];
    let colorIndex = 0;

    const drawText = (glowColor) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.font = `${textHeight}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Draw the glow
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 20;
      ctx.fillStyle = glowColor;
      ctx.fillText(text, centerX, centerY);

      // Draw the main text
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#fff';
      ctx.fillText(text, centerX, centerY);
      ctx.restore();
    };

    const animate = () => {
      colorIndex = (colorIndex + 1) % colors.length;
      drawText(colors[colorIndex]);
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 500); // Change color every 500ms
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={600} height={150} />;
};

export default CanvasNeon;
