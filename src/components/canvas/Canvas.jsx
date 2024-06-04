import React, { useEffect, useRef } from "react";
import UseCanvas from "./UseCanvas";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = UseCanvas(draw);

  return <canvas ref={canvasRef} {...rest} />;
};
export default Canvas;
