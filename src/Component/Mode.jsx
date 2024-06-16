import React, { useContext } from 'react'
import MappingModel from './Model/MappingModel'
import { Shared } from '../Shared'

function Mode() {
  const Init = "Welcome to GIC2B"
  const {Text,setText} = useContext(Shared)
  const style = {
    background:' rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(5px)',
    webkitBackdropFilter:' blur(5px)',
    bordeRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)'
  }
  function handle(){
    const Input = document.querySelector(".Input").value
    Input == "" ?  setText(Init) : setText(Input)
    console.log(Text);
  }
  return (
    <div style={style}  class='
    ml-4 mr-4 mb-4 mt-2
    p-4
    rounded-md
    backdrop-blur bg-white/15
    relative
    flex justify-center flex-col
    '>
        <input onChange={handle} class="Input w-full flex-grow rounded-md p-4 bg-[#F0F0F0] text-md" type="text" placeholder={Init}/>
      <MappingModel/>
    </div>
  )
}

export default Mode