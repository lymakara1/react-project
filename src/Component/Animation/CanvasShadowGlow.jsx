// src/CanvasShadowGlow.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const CanvasShadowGlow = () => {
  const canvasRef = useRef(null);
  const {Text} = useContext(Shared)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let shadowBlur = 0;
    let increasing = true;
    const text = Text;
    const maxBlur = 30;
    const minBlur = 0;

    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '40px Arial';
      ctx.fillStyle = 'blue';
      ctx.shadowColor = 'rgba(0, 0, 255, 0.7)';
      ctx.shadowBlur = shadowBlur;
      const textWidth = ctx.measureText(text).width;
      const x = (canvas.width - textWidth) / 2;
      const y = canvas.height / 2;
      ctx.fillText(text, x, y);
    };

    const updateShadowBlur = () => {
      if (increasing) {
        shadowBlur += 0.5;
        if (shadowBlur >= maxBlur) {
          increasing = false;
        }
      } else {
        shadowBlur -= 0.5;
        if (shadowBlur <= minBlur) {
          increasing = true;
        }
      }
    };

    const animate = () => {
      drawText();
      updateShadowBlur();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);
  const handlStyle = {
    background:' rgba(255, 255, 255, 0.6)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(5px)',
    webkitBackdropFilter:' blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.18)'
  }
  return (
    <canvas ref={canvasRef} width={600} height={150} style={handlStyle}/>
  );
};

export default CanvasShadowGlow;
