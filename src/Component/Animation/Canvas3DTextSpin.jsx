// src/Canvas3DTextSpin.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const Canvas3DTextSpin = () => {
  const canvasRef = useRef(null);

  const {Text} = useContext(Shared)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const text =Text
    const textHeight = 80;
    let angle = 0;
    const angleSpeed = 0.05;
    const depth = 20;

    const drawText = (x, y, scale, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.fillStyle = color;
      ctx.fillText(text, 0, 0);
      ctx.restore();
    };

    const draw3DText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.font = `${textHeight}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < depth; i++) {
        const scale = 1 - (i / depth);
        const offsetX = i * Math.cos(angle) * 5;
        const offsetY = i * Math.sin(angle) * 5;
        const opacity = 1 - (i / depth);
        const color = `rgba(255, 255, 255, ${opacity})`;

        drawText(centerX + offsetX, centerY + offsetY, scale, color);
      }

      ctx.restore();
    };

    const animate = () => {
      angle += angleSpeed;
      draw3DText();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={800} height={150} />;
};

export default Canvas3DTextSpin;
