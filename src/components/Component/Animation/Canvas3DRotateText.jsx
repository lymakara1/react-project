// src/Canvas3DRotateText.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const Canvas3DRotateText = () => {
  const canvasRef = useRef(null);
  
  
  useEffect(() => {
    const {Text,setText} = useContext(Shared)
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const textHeight = 80;
    let angle = 0;
    const angleSpeed = 0.01;
    const perspective = 400;

    const drawText = (x, y, z) => {
      ctx.save();
      ctx.translate(x, y);

      // Apply perspective
      const scale = perspective / (perspective - z);
      ctx.scale(scale, scale);

      ctx.fillStyle = '';
      ctx.fillText(Text, 0, 0);
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

      // Calculate depth and spacing
      const depth = 200;
      const step = 10;

      for (let i = -depth; i < depth; i += step) {
        const z = i;
        const x = centerX + z * Math.sin(angle);
        const y = centerY;

        drawText(x, y, z);
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

  return <canvas ref={canvasRef} width={800} height={150}  />;
};

export default Canvas3DRotateText;
