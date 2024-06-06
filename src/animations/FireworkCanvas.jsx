import React, { useEffect, useRef } from "react";

function FireworkCanvas() {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();

    const particles = [];
    const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];
    const gravity = 0.03;
    const friction = 0.99;

    const Particle = function (x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = {
        x: velocity.x,
        y: velocity.y,
      };
      this.opacity = 1;

      this.draw = function () {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      };

      this.update = function () {
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.velocity.y += gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= 0.003;
      };
    };

    const addParticles = (x, y) => {
      const particleCount = 500;
      const power = 12;
      const radians = (Math.PI * 2) / particleCount;

      for (let i = 0; i < particleCount; i++) {
        particles.push(
          new Particle(x, y, 3, `hsl(${Math.random() * 360}, 50%, 50%)`, {
            x: Math.cos(radians * i) * (Math.random() * power),
            y: Math.sin(radians * i) * (Math.random() * power),
          })
        );
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        if (particle.opacity > 0) {
          particle.update();
        } else {
          particles.splice(i, 1);
        }
      });
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    // Generate fireworks at random positions
    const interval = setInterval(() => {
      const randomX = Math.random() * canvas.width;
      const randomY = Math.random() * canvas.height;
      addParticles(randomX, randomY);
    }, 2000); // Change interval time as needed

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}

export default FireworkCanvas;
