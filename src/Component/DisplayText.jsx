import React, { useContext, useEffect } from 'react'
import CanvasGlitch from './Animation/CanvasGlitch'
import CanvasBounce from './Animation/CanvasBounce'
import CanvasExplosion from './Animation/CanvasExplosion'
import CanvasFadeInOut from './Animation/CanvasFadeInOut'
import CanvasFlip from './Animation/CanvasFlip'
import CanvasMorph from './Animation/CanvasMorph'
import CanvasShadowGlow from './Animation/CanvasShadowGlow'
import CanvasHandwriting from './Animation/CanvasHandwriting'
import Canvas3DText from './Animation/Canvas3DText'
import Canvas3DRotateText from './Animation/Canvas3DRotateText'
import Canvas3DTextSpin from './Animation/Canvas3DTextSpin'
import Test from './Animation/Test'
import Console from './Animation/Console'
import ReactCssComponent from './Animation/ReactCssComponent'
import Morph from './Animation/Morph'
import SpecialText from './Animation/SpecialText'
import DoubleLayer from './Animation/DoubleLayer'
import TextOpen from './Animation/TextOpen'
import MilkText from './Animation/MilkText'
import Neon2 from './Animation/Neon2'
import Glowing from './Animation/Glowing'
import CutPaper from './Animation/CutPaper'
import GifLink from './Model/GifLink'
import { Shared } from '../Shared'
import CanvasNeon from './Animation/CanvasNeon'
import CanvasBurn from './Animation/CanvasBurn'
import CanvasClock from './Animation/CanvasClock'
import CanvasFirework from './Animation/CanvasFirework'
import Caution from './Animation/Caution'
import Babel from './Animation/Babel'
import Pure from './Animation/Pure'
import { useRef } from 'react'

import AbstractTextEffect from '../animations/AbstractTextEffect/AbstractTextEffect'
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
import FireworkCanvas from "../animations/FireworkCanvas";
import RefractedFloatingTextEffect from "../animations/RefractedFloatingTextEffect/RefractedFloatingTextEffect";
import TextMorph from "../animations/TextMorph/TextMorph";
import SVGTextEffect from "../animations/SVGTextEffect/SVGTextEffect";
import LaserWriter from "../animations/LaserWriter/LaserWriter";
import SupermanMainTitles from "../animations/SupermanMainTitles/SupermanMainTitles";
import SmokeTextAnimation from "../animations/SmokeTextAnimation/SmokeTextAnimation";
import LetterDropTextEffect from "../animations/LetterDropTextEffect/LetterDropTextEffect";
import DrawInTextEffect from "../animations/DrawInTextEffect/DrawInTextEffect";
import CSSAnimatedTextEffect from "../animations/CSSAnimatedTextEffect/CSSAnimatedTextEffect";
import SPIKY from "../animations/SPIKY/SPIKY";
import AnimatedCSSFoldedTextEffect from "../animations/AnimatedCSSFoldedTextEffect/AnimatedCSSFoldedTextEffect";
import GradientGooeyText from "../animations/GradientGooeyText/GradientGooeyText";
import MilkTextEffect from "../animations/MilkTextEffect/MilkTextEffect";
import NeonGlowTextEffect from "../animations/NeonGlowTextEffect/NeonGlowTextEffect";
import FlickeringNeonSign from "../animations/FlickeringNeonSign/FlickeringNeonSign";
import Text3DEffect from "../animations/Text3DEffect/Text3DEffect";
import StrokeAnimation from "../animations/StrokeAnimation/StrokeAnimation";
import ShiningTextAnimation from "../animations/ShiningTextAnimation/ShiningTextAnimation";
import BlinkingTextAnimation from "../animations/BlinkingTextAnimation/BlinkingTextAnimation";
import RotatingTextAnimation from "../animations/RotatingTextAnimation/RotatingTextAnimation";
import SkewTextAnimation from "../animations/SkewTextAnimation/SkewTextAnimation";
import PulseTextAnimation from "../animations/PulseTextAnimation/PulseTextAnimation";
import JumpingTextAnimation from "../animations/JumpingTextAnimation/JumpingTextAnimation";

function DisplayText() {
  const {fullscreen,setFullScreen}= useContext(Shared)
  const {ModeClicked,setModeClicked} = useContext(Shared)
  const componentRef = useRef();

  useEffect(() => {
    // Function to check if value is true
    const checkValue = () => {
      if (fullscreen === true) {
          setFullScreen(false)
        !document.fullscreenElement ? componentRef.current.requestFullscreen():
        console.log('Value is true!' + fullscreen);
      }
    };
    checkValue();

    return () => {
    };
  }, [fullscreen]);
  
    useEffect(() => {
      // Find the user in the users array
      const user = GifLink.find(user => user.name === ModeClicked);
      setModeClicked(user ? user.name : 'Unknown Animation');
    }, [ModeClicked]);

    const renderComponent = ()=>{
      switch(ModeClicked){
        default :return <Caution/>
        case 'Bounce' :return <CanvasBounce/>;
        case 'Explosion' : return <CanvasExplosion/>
        case 'Fade In Out' : return <CanvasFadeInOut/>
        case 'Flip' : return <CanvasFlip/>
        case 'Glitch' : return <CanvasGlitch/>
        case 'Handwriting' : return <CanvasHandwriting/>
        case 'Morph' : return <Morph/>
        case 'Shadow Glow' : return <CanvasShadowGlow/>
        case 'Neon' : return <CanvasNeon/>
        case 'Burn' : return <CanvasBurn/>
        case '3D Rotate' : return <Canvas3DRotateText/>
        case '3D Text' : return <Canvas3DText/>
        case '3D Spin' : return <Canvas3DTextSpin/>
        case 'Pure' : return <Pure/>
        case 'Firework' : return <CanvasFirework/>
        case 'Console' : return <Console/>
        case 'Paper cutting' : return <CutPaper/>
        case 'Double Layer' : return <DoubleLayer/>
        case 'Glowing' : return <Glowing/>
        case 'Horror' : return <HorrorText/>
        case 'Milk Text' : return <MilkText/>
        case 'Neon 2' : return <Neon2/>
        case 'React Css' :return <ReactCssComponent/>
        case 'Special Text' : return <SpecialText/>
        case 'Test' : return <Test/>
        case 'Text Open' : return <TextOpen/>
        case 'Focus' : return <Babel/>
        case 'Caution' : return <Caution/>
        case 'Abstract Effect' : return <AbstractTextEffect/>
        case 'Firework': 
        return <FireworkCanvas/>
    case 'Cutting': 
        return <CuttingTextEffect/>
    case 'Frozen': 
        return <FrozenText/>
    case 'Glitch': 
        return <GlitchText/>
    case 'Growing Grassy': 
        return <GrowingGrassyText/>
    case 'Horror Text': 
        return <HorrorTextEffect/>
    case 'Jessica Jones': 
        return <JessicaJonesLogo/>
    case 'Mirror Cracked': 
        return <MirrorCrackedText/>
    case 'Mystique': 
        return <MystiqueText/>
    case 'Neon Text': 
        return <NeonText/>
    case 'Particle Text': 
        return <ParticleText/>
    case 'Perspective Text': 
        return <PerspectiveTextHover/>
    case 'Repellers': 
        return <Repellers/>
    case 'SciFi': 
        return <SciFiTextEffect/>
    case 'Terminal': 
        return <TerminalText/>
    case 'Text Effect': 
        return <TextEffect/>
    case 'Text Pendulum': 
        return <TextPendulum/>
    case 'Refracted': 
        return <RefractedFloatingTextEffect/>
    case 'TextMorph': 
        return <TextMorph/>
    case 'SVG Effect': 
        return <SVGTextEffect/>
    case 'Abstract': 
        return <AbstractTextEffect/>
    case 'Laser Writer': 
        return <LaserWriter/>
    case 'Superman': 
        return <SupermanMainTitles/>
    case 'Smoke Text': 
        return <SmokeTextAnimation/>
    case 'Letter Drop': 
        return <LetterDropTextEffect/>
    case 'Draw In': 
        return <DrawInTextEffect/>
    case 'CSS Animated': 
        return <CSSAnimatedTextEffect/>
    case 'SPIKY': 
        return <SPIKY/>
    case 'Folded': 
        return <AnimatedCSSFoldedTextEffect/>
    case 'Gradient': 
        return <GradientGooeyText/>
    case 'Milk Text': 
        return <MilkTextEffect/>
    case 'Neon Glow': 
        return <NeonGlowTextEffect/>
    case 'Neon Sign': 
        return <FlickeringNeonSign/>
    case 'Text 3D': 
        return <Text3DEffect/>
    case 'Stroke': 
        return <StrokeAnimation/>
    case 'Shining': 
        return <ShiningTextAnimation/>
    case 'Blinking': 
        return <BlinkingTextAnimation/>
    case 'Rotating': 
        return <RotatingTextAnimation/>
    case 'Skew Text': 
        return <SkewTextAnimation/>
    case 'Pulse Text': 
        return <PulseTextAnimation/>
    case 'Jumping Text': 
        return <JumpingTextAnimation/>
    
      }
    }
  return <div ref={componentRef}
  className='flex justify-center items-center'>
    {renderComponent()}
  </div> 
}

export default DisplayText