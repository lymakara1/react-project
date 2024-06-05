import React, { useEffect, useRef } from "react";
import ResizeCanvas from "./ResizeCanvas";

const UseCanvas = (draw) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const handleResize = () => {
      const resizeResult = ResizeCanvas(canvas);
      if (resizeResult) {
        // Optionally, handle resize result
      }
    };

    //Our draw came here
    const render = () => {
      frameCount++;
      handleResize(); // Adjust canvas size before each draw
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    window.addEventListener("resize", handleResize);

    // handleResize();
    // window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [draw]);
  return canvasRef;
};

export default UseCanvas;
