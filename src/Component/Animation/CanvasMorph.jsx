// src/CanvasMorph.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const CanvasMorph = () => {
  const canvasRef = useRef(null);
  const {Text} = useContext(Shared)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const text1 = Text;
    const text2 = Text;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const textHeight = 40;
    const morphDuration = 2000; // Duration of the morph animation in milliseconds
    let startTime;

    const drawText = (text, alpha = 1) => {
      ctx.save();
      ctx.font = `${textHeight}px Arial`;
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      const textWidth = ctx.measureText(text).width;
      ctx.fillText(text, centerX - textWidth / 2, centerY);
      ctx.restore();
    };

    const morph = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / morphDuration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (progress < 1) {
        const morphedText = blendText(text1, text2, progress);
        drawText(morphedText.text1, morphedText.alpha1);
        drawText(morphedText.text2, morphedText.alpha2);
        requestAnimationFrame(morph);
      } else {
        drawText(text2);
      }
    };

    const blendText = (text1, text2, progress) => {
      const alpha1 = 1 - progress;
      const alpha2 = progress;
      return { text1, text2, alpha1, alpha2 };
    };

    const animate = (timestamp) => {
      morph(timestamp);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={600} height={150} style={{ backgroundColor: 'black' }} />;
};

export default CanvasMorph;
