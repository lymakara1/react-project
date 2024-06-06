import React, { useContext } from "react";
import CuttingTextEffect from "../animations/CuttingTextEffect/CuttingTextEffect";
import FrozenText from "../animations/FrozenText/FrozenText";
import GlitchText from "../animations/GlitchText/GlitchText";
import GrowingGrassyText from "../animations/GrowingGrassyText/GrowingGrassyText";
import HorrorTextEffect from "../animations/HorrorTextEffect/HorrorTextEffect";
import JessicaJonesLogo from "../animations/JessicaJonesLogo/JessicaJonesLogo";
import MirrorCrackedText from "../animations/MirrorCrackedText/MirrorCrackedText";
import MystiqueText from "../animations/MystiqueText/MystiqueText";
import NeonText from "../animations/NeonText/NeonText";
import ParticleText from "../animations/ParticleText/ParticleText";
import PerspectiveTextHover from "../animations/PerspectiveTextHover/PerspectiveTextHover";
import Repellers from "../animations/Repellers/Repellers";
import SciFiTextEffect from "../animations/SciFiTextEffect/SciFiTextEffect";
import TerminalText from "../animations/TerminalText/TerminalText";
import TextEffect from "../animations/TextEffect/TextEffect";
import TextPendulum from "../animations/TextPendulum/TextPendulum";

function SpecialAnimation() {
  return (
    <div>
      <CuttingTextEffect />
      <FrozenText />
      <GlitchText />
      <GrowingGrassyText />
      <HorrorTextEffect />
      <JessicaJonesLogo />
      <MirrorCrackedText />
      <MystiqueText />
      <NeonText />
      <ParticleText />
      <PerspectiveTextHover />
      <Repellers />
      <SciFiTextEffect />
      <TerminalText />
      <TextEffect />
      <TextPendulum />
    </div>
  );
}

export default SpecialAnimation;
