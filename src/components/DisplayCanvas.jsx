import React, { useContext, useEffect, useRef } from "react";
import Canvas from "./canvas/Canvas";
import { ShareText } from "./ShareText";

// Draw Background
const drawBackground = (ctx, width, height, backgroundColor) => {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
};

const drawText = (
  ctx,
  frameCount,
  text,
  width,
  height,
  scrollDirection,
  scrollSpeed,
  blink,
  blinkFrequency,
  fontFamily,
  fontSize,
  fontColor
) => {
  ctx.font = `bold ${fontSize}px ${fontFamily}`;
  const textMetrics = ctx.measureText(text);
  const textWidth = textMetrics.width;
  const textHeight =
    textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
  let x = (width - textWidth) / 2;
  const y = (height - textHeight) / 2 + textMetrics.actualBoundingBoxAscent;

  ctx.fillStyle = fontColor;

  const isPaused = scrollDirection === 0;
  const direction = scrollDirection;
  const speed = scrollSpeed;

  if (!isPaused) {
    const dx = (frameCount * speed) % (width + textWidth);
    x = direction === 1 ? dx - textWidth : width - dx;

    if (
      (direction === 1 && x > width) ||
      (direction === -1 && x + textWidth < 0)
    ) {
      frameCount = 0;
    }
  }

  const currentTime = Date.now();
  const blinkState =
    !blink || currentTime % (2000 / blinkFrequency) < 1000 / blinkFrequency;

  if (blinkState) {
    ctx.fillText(text, x, y);
  }
};

function DisplayCanvas({
  scrollDirection,
  scrollSpeed,
  blink,
  blinkFrequency,
  fontFamily,
  fontSize,
  fontColor,
  backgroundColor,
}) {
  const { text, fullscreen, setFullScreen } = useContext(ShareText);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
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
    drawBackground(ctx, width, height, backgroundColor);
    drawText(
      ctx,
      frameCount,
      text,
      width,
      height,
      scrollDirection,
      scrollSpeed,
      blink,
      blinkFrequency,
      fontFamily,
      fontSize,
      fontColor
    );
  };

  return (
    <div ref={canvasContainerRef} className="w-full h-40">
      <Canvas draw={draw} className="bg-black rounded-md" />
    </div>
  );
}

export default DisplayCanvas;
