import React, { useContext } from 'react'
import './Neon2.css'
import { Shared } from '../../Shared'

function Neon2() {
	const {Text } = useContext(Shared)
  return (
    <div style={{
      height:150,
      position:'relative',
      color: 'white'
    }}> 
      <div class="main">
        <span style={{
          fontSize: 50,
        }} class="webdev">{Text}</span>
        <span style={{
          fontSize: 50,
        }} class="socod">{Text}</span>
      </div>
  </div>
  )
}

export default Neon2