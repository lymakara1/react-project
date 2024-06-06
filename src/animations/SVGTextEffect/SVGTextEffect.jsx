import React from "react";
import "./SVGTextEffect.css";

const SVGTextEffect = () => {
  return (
    <div className="svg-text-wrapper">
      <svg viewBox="0 0 960 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            SVG Text
          </text>
        </symbol>
        <g className="g-ants">
          <use href="#s-text" className="text-copy"></use>
          <use href="#s-text" className="text-copy"></use>
          <use href="#s-text" className="text-copy"></use>
          <use href="#s-text" className="text-copy"></use>
          <use href="#s-text" className="text-copy"></use>
        </g>
      </svg>
    </div>
  );
};

export default SVGTextEffect;
