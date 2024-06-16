import React, { useContext } from 'react'
import Premium from './Premium.svg'
import { Shared } from '../Shared'

function Nav() {
  const {fullscreen,setFullScreen} = useContext(Shared)
  const handleFS = ()=>{

    setFullScreen(true)
    console.log("handle Full Screen" + fullscreen);
}
  return (
    <nav className='
        flex justify-between items-center
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%        ml-4 mr-4 mb-4 mt-2
        p-4
        rounded-md
        flex-grow
    '>
        <img src={Premium}  class='w-24' alt="" />

        <div className='
          flex gap-4 
          items-center
        '>
          <a className='hover:text-white decoration:none'>Home</a>
          <a className='hover:text-white decoration:none'>About us</a>
          <a className='hover:text-white decoration:none'>Contact</a>
        </div>
        <div onClick={handleFS} >FullScreen</div>

    </nav>
)
}

export default Nav