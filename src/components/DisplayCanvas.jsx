import React, { useContext, useEffect, useRef } from "react";
import Canvas from "./canvas/Canvas";

function DisplayCanvas() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.fillStyle = "#000000";
    // ctx.beginPath();
    // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    // ctx.fill();

    // ctx.fillStyle = "red";
    // ctx.font = "bold 50px sans-serif";
    // ctx.fillText("hi ther", 50 + frameCount, 100);

    ctx.fillStyle = "yellow";
    const delta = frameCount % 800;
    ctx.fillRect(10, 10, 100, 100);
  };
  return (
    <div>
      <Canvas draw={draw} className="bg-black w-full" />
    </div>
  );
}

export default DisplayCanvas;
