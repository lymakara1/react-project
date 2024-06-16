// src/CanvasFlip.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const CanvasFlip = () => {
  const canvasRef = useRef(null);
  const {Text} = useContext(Shared)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const text = Text;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let scaleX = 1;
    let increasing = false;

    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(scaleX, 1);
      ctx.font = '40px Arial';
      ctx.fillStyle = 'blue';
      const textWidth = ctx.measureText(text).width / 2;
      ctx.fillText(text, -textWidth, 10);
      ctx.restore();
    };

    const updateScale = () => {
      if (increasing) {
        scaleX += 0.02;
        if (scaleX >= 1) {
          increasing = false;
        }
      } else {
        scaleX -= 0.02;
        if (scaleX <= -1) {
          increasing = true;
        }
      }
    };

    const animate = () => {
      drawText();
      updateScale();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas ref={canvasRef} width={600} height={150}/>
  );
};

export default CanvasFlip;
