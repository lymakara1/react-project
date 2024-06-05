import React, { useContext, useEffect, useRef } from "react";
import Canvas from "./canvas/Canvas";
import { ShareText } from "./ShareText";

// Draw Backgrund
const drawBackground = (ctx, width, height) => {
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, width, height);
};

//Draw Backgorund Animation
const drawCircle = function (ctx) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  ctx.beginPath();

  ctx.beginPath();
  ctx.arc(100, 100, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.fillStyle = randomColor;
  ctx.fill();
};

// Draw Text Input
const drawText = (ctx, frameCount, text, width, height) => {
  var x = 100;
  var y = 100;
  var dx = 1;

  ctx.fillStyle = "red";
  ctx.font = "bold 100px sans-serif";
  ctx.fillText(text, frameCount, height / 2);

  // Scroll Right
  if (x > width) {
    x = -textWidth;
  }
  x += dx;
};

function DisplayCanvas() {
  const { text, fullscreen, setFullScreen } = useContext(ShareText);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    // Function to check if value is true
    const checkValue = () => {
      if (fullscreen) {
        setFullScreen(false);
        if (!document.fullscreenElement) {
          canvasContainerRef.current.requestFullscreen().catch((err) => {
            console.error(
              `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
            );
          });
        } else {
          console.log("Already in full-screen mode!");
        }
      }
    };
    checkValue();
  }, [fullscreen, setFullScreen]);

  const draw = (ctx, frameCount) => {
    const { width, height } = ctx.canvas;
    ctx.clearRect(0, 0, width, height);
    drawBackground(ctx, width, height);
    drawText(ctx, frameCount, text, width, height);
    // drawCircle(ctx);
  };

  return (
    <div ref={canvasContainerRef} className="w-full h-40">
      <Canvas draw={draw} className="bg-black rounded-md" />
    </div>
  );
}

export default DisplayCanvas;
