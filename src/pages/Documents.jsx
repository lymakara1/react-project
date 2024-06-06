import React, { useContext } from "react";
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

function Documents() {
  return (
    <div className="m-3 p-3 rounded-md bg-gradient-to-r from-[#D21CFF] to-[#FF1E22]">
      <div>Documents</div>
      <div className="text-white">
        <div>hello</div>
        <div>question 1</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <JessicaJonesLogo />
        <NeonText />
        <PerspectiveTextHover />
        <Repellers />
        <FlickeringLightText />
        <TextEffect />
        <FluidTextHover />
        <FrozenText />
        <MirrorCrackedText />
        <ParticleText />
        <TerminalText />
        <GlitchText />
        <TextPendulum />
        <MystiqueText />
        <WaveTextEffect />
        <GrowingGrassyText />
        <ThreeDTextEffect />
        <HorrorTextEffect />
        <SciFiTextEffect />
        <CuttingTextEffect />
      </div>
    </div>
  );
}

export default Documents;
