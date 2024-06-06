import React, { useContext } from "react";
import "./FlickeringLightText.css";
import { ShareText } from "../../components/ShareText";

const FlickeringLightText = () => {
  const { text } = useContext(ShareText);
  return (
    <div className="flicker-wrapper">
      <h1 className="flicker-text">Flickering Text</h1>
      <h1 className="flicker-text">{text}</h1>
    </div>
  );
};

export default FlickeringLightText;
