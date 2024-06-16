// src/CanvasHandwriting.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const CanvasHandwriting = () => {
  const canvasRef = useRef(null);
  const {Text} = useContext(Shared)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const text = Text;
    const textHeight = 40;
    const textColor = 'blue';
    const speed = 2; // Adjust the speed of the handwriting

    ctx.font = `${textHeight}px Arial`;
    ctx.fillStyle = textColor;

    let textWidth = ctx.measureText(text).width;
    let currentWidth = 0;

    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.font = `${textHeight}px Arial`;
      ctx.fillStyle = textColor;

      // Create a clipping region that grows over time
      ctx.beginPath();
      ctx.rect(50, canvas.height / 2 - textHeight, currentWidth, textHeight * 1.2);
      ctx.clip();

      ctx.fillText(text, 50, canvas.height / 2);
      ctx.restore();
    };

    const animate = () => {
      drawText();

      currentWidth += speed;
      if (currentWidth < textWidth) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={600} height={150} />;
};

export default CanvasHandwriting;
