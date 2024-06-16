import React, { useContext, useState } from "react";
import FireworkCanvas from "../animations/FireworkCanvas";
import JessicaJonesLogo from "../animations/JessicaJonesLogo/JessicaJonesLogo";
import NeonText from "../animations/NeonText/NeonText";
import PerspectiveTextHover from "../animations/PerspectiveTextHover/PerspectiveTextHover";
import Repellers from "../animations/Repellers/Repellers";
import TextEffect from "../animations/TextEffect/TextEffect";
import FlickeringLightText from "../animations/FlickeringLightText/FlickeringLightText";
import FluidTextHover from "../animations/FluidTextHover/FluidTextHover";
import FrozenText from "../animations/FrozenText/FrozenText";
import MirrorCrackedText from "../animations/MirrorCrackedText/MirrorCrackedText";
import ParticleText from "../animations/ParticleText/ParticleText";
import TerminalText from "../animations/TerminalText/TerminalText";
import GlitchText from "../animations/GlitchText/GlitchText";
import TextPendulum from "../animations/TextPendulum/TextPendulum";
import MystiqueText from "../animations/MystiqueText/MystiqueText";
import WaveTextEffect from "../animations/WaveTextEffect/WaveTextEffect";
import GrowingGrassyText from "../animations/GrowingGrassyText/GrowingGrassyText";
import ThreeDTextEffect from "../animations/ThreeDTextEffect/ThreeDTextEffect";
import HorrorTextEffect from "../animations/HorrorTextEffect/HorrorTextEffect";
import SciFiTextEffect from "../animations/SciFiTextEffect/SciFiTextEffect";
import CuttingTextEffect from "../animations/CuttingTextEffect/CuttingTextEffect";
import "./Dstyle.css";
import SpecialAnimation from '../components/SpecialAnimation'

function Documents() {
  const [questions] = useState([
    "How do I start using Text Board?",
    "How do I change the scroll direction?",
    "How can I adjust the scroll speed?",
    "How do I make my text blink?",
    "How do I set the blink frequency?",
    "How do I change the font?",
    "How can I adjust the font size?",
    "How do I change the font color?",
    "How do I set the background color?",
    "How do I use the special feature?",
  ]);

  const [answers] = useState([
    "Simply enter your text in the input box, choose your desired settings, and it will automatically run to see your text animate across the screen.",
    `In Customization: -> Select "Left to Right" or "Right to Left" arrow in the scroll direction.`,
    `In Customization: -> Use the speed slider to control a specific value the speed from left to right.`,
    `In Customization: -> Find the Blink Button and press "On Blink Button."`,
    `In Customization: -> Use the slider to control a specific value the blink frequency from left to right.`,
    `In Font Setting: -> Find the font Font Option and then select a specific font.`,
    `In Font Setting: -> Find the Font-Size Option and then click on the "Increment" or "Decrement" button.`,
    `In Font Setting: -> Choose a color from "the palette", click on the color you want.`,
    `In Font Setting: -> Choose a color from "the palette", click on the color you want.`,
    `In Premium Settings: -> Select any special feature that you want to and then click on its button.`,
  ]);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-slate-100 m-3 p-3 rounded-md">
      <div className="text-slate-800 flex flex-col justify-center items-center w-full ">
        <div className="text-3xl font-bold m-5">What is GIC2B Textboard?</div>
        <p className="text-black mt-5 w-[90%] text-md">
        <b>GIC2B Textboard</b>  represents a pioneering online tool developed by the 2024 I3 GIC2B at
        Institute of Technology of Cambodia. It empowers users to input text and personalize its animation, direction, font selection, and other customizable features as shown below.
        </p>
        <div className="questionAnswer w-full  flex flex-col ">
          {questions.map((question, index) => (
            <div key={index}>
              <div
                className="question flex justify-between flex-row items-center rounded-md m-1 bg-blue-200 cursor-pointer p-3"
                onClick={() => toggleAnswer(index)}
              >
                <span>{`${index + 1}. ${question}`}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={`w-6 h-6 ${
                    expandedIndex === index && "rotate-180"
                  }`}
                >
                  <path
                    fill="#74C0FC"
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
              </div>
              {expandedIndex === index && (
                <div className="answer mt-3">
                  <p>{answers[index]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <SpecialAnimation/>
    </div>
  );
}

export default Documents;
