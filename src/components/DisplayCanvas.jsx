import React, { useContext, useEffect, useRef } from "react";
import Canvas from "./canvas/Canvas";
import { ShareText } from "./ShareText";

// Draw Backgrund
const drawBackground = (ctx, width, height) => {
  ctx.fillStyle = "black";
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

const drawText = (ctx, frameCount, text, width, height) => {
  var textMetrics = ctx.measureText(text);
  var textWidth = ctx.measureText(text).width;
  var textHeight =
    textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
  var x = (width - textWidth) / 2;
  var y = (height - textHeight) / 2 + textMetrics.actualBoundingBoxAscent;

  ctx.fillStyle = "red";
  ctx.font = "bold 100px sans-serif";

  let speed = 2;
  let direction = 1; // 1 for right, -1 for left
  let isPaused = true;
  let blink = true; // Set to true to enable blinking
  let blinkSpeed = 50; // Blink speed in milliseconds

  if (isPaused) {
    // Center the text when paused
    x = (width - textWidth) / 2;
  } else {
    let dx = (frameCount * speed) % (width + textWidth);
    x = direction === 1 ? dx - textWidth : width - dx;

    // Adjust the position to loop correctly
    if (direction === 1 && x > width) {
      frameCount = 0;
    } else if (direction === -1 && x + textWidth < 0) {
      frameCount = 0;
    }
  }

  const currentTime = Date.now();
  const elapsedTime = currentTime - frameCount;
  const blinkState = blink && elapsedTime % (2 * blinkSpeed) < blinkSpeed;

  if (blinkState) {
    ctx.fillText(text, x, y);
  }
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
