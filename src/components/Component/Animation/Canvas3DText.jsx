// src/Canvas3DRotateText.js
import React, { useRef, useEffect } from 'react';
import { useContext } from 'react';
import { Shared } from '../../Shared';

const Canvas3DText = () => {
  const canvasRef = useRef(null);
  const {Text,setText} = useContext(Shared)


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const text = Text
    const textHeight = 80;
    let angle = 0;
    let scale = 1;
    let increasing = true;
    const angleSpeed = 0.05;
    const scaleSpeed = 0.01;
    const maxScale = 1;
    const minScale = 0.5;

    const drawText = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.font = `${textHeight}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle);
      ctx.scale(scale, scale);
      ctx.fillStyle = 'white';
      ctx.fillText(text, 0, 0);
      ctx.restore();
    };

    const animate = () => {
      if (increasing) {
        scale += scaleSpeed;
        if (scale >= maxScale) {
          increasing = false;
        }
      } else {
        scale -= scaleSpeed;
        if (scale <= minScale) {
          increasing = true;
        }
      }
      angle += angleSpeed;

      drawText();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={600} height={150}  />;
};

export default Canvas3DText;
