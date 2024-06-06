import React, { useContext } from "react";
import "./CuttingTextEffect.css";
import { ShareText } from "../../components/ShareText";

const CuttingTextEffect = () => {
  const { text } = useContext(ShareText);
  return (
    <div className="cutting-text-wrapper">
      <h1 className="cutting-text">Cutting Text Effect</h1>
      <h1 className="cutting-text">{text}</h1>
    </div>
  );
};

export default CuttingTextEffect;
