// src/CanvasExplosion.js
import React, { useRef, useEffect, useContext } from 'react';
import { Shared } from '../../Shared';

const CanvasExplosion = () => {
  const canvasRef = useRef(null);
  const {Text} = useContext(Shared)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const text = Text;
    const particleCount = 100;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let particles = [];

    const initializeParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: centerX,
          y: centerY,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          alpha: 1,
        });
      }
    };

    initializeParticles();

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '40px Arial';
      ctx.fillStyle = 'blue';
      const textWidth = ctx.measureText(text).width;
      ctx.fillText(text, centerX - textWidth / 2, centerY);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 0, 0, ${particle.alpha})`;
        ctx.fill();
      });
    };

    const updateParticles = () => {
      let allFaded = true;
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.alpha -= 0.01; // Fade out effect

        if (particle.alpha > 0) {
          allFaded = false;
        }
      });

      if (allFaded) {
        initializeParticles();
      }
    };

    const animate = () => {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} width={600} height={150} />;
};

export default CanvasExplosion;
