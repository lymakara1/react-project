import React from "react";
import "./SVGAnimatedLetters.css";

const SVGAnimatedLetters = () => {
  return (
    <div className="svg-animated-letters-wrapper">
      <svg viewBox="0 0 800 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            SVG Letters
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

export default SVGAnimatedLetters;
