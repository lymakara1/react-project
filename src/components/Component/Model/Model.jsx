import React, { useContext } from 'react'
import { Shared } from '../../Shared';

function Model(props) {
  const {ModeClicked,setModeClicked} = useContext(Shared)
  return (
    <a >
      <div onClick={()=>{
        console.log(props.AnimationName);
        setModeClicked(props.AnimationName)
      }} className='
          flex justify-between
          flex-col
          bg-[#71A8FB] w-36 m-2
          rounded-xl
          ModeClicked
      '>
          <img className='rounded-ss-xl rounded-se-xl' src={props.gif} alt="" />
          <div className="title
          flex
          justify-center
          p-2
          text-white
          ">
              {props.AnimationName}
          </div>
      </div>
    </a>                               
  )
}

export default Model