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
import HorrorText from './Animation/HorrorText'
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
      }
    }
  return <div ref={componentRef}
  className='flex justify-center items-center'>
    {renderComponent()}
  </div> 
}

export default DisplayText