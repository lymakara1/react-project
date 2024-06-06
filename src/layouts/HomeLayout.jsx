import React, { useState } from "react";
import DisplayCanvas from "../components/DisplayCanvas";
import Customization from "../components/Customization";
import InputField from "../components/InputField";
import FontSetting from "../components/FontSetting";

function HomeLayout() {
  const [scrollDirection, setScrollDirection] = useState(0); // 0 for paused, 1 for right to left, -1 for left to right
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [blink, setBlink] = useState(false);
  const [blinkFrequency, setBlinkFrequency] = useState(500); // in ms
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [fontSize, setFontSize] = useState(50);
  const [fontColor, setFontColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  return (
    <div className="bg-slate-200 m-3 p-3 rounded-md flex flex-col gap-5">
      <DisplayCanvas
        scrollDirection={scrollDirection}
        scrollSpeed={scrollSpeed}
        blink={blink}
        blinkFrequency={blinkFrequency}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
      />
      <InputField />
      <div className="flex flex-row max-md:flex-col">
        <div className="f flex-grow">
          <Customization
            setScrollDirection={setScrollDirection}
            setScrollSpeed={setScrollSpeed}
            setBlink={setBlink}
            setBlinkFrequency={setBlinkFrequency}
          />
        </div>
        <div className="f flex-grow">
          <FontSetting
            fontFamily={fontFamily}
            setFontFamily={setFontFamily}
            fontSize={fontSize}
            setFontSize={setFontSize}
            fontColor={fontColor}
            setFontColor={setFontColor}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
