import React, { useContext } from 'react'
import './TextOpen.css'
import { Shared } from '../../Shared'

function TextOpen() {
	const {Text } = useContext(Shared)
  return (
    <div style={{
      height:150,
      position:'relative',
    }}>
        <div class="wrapper">
  <div class="heading"> 
    <span class="char1" data-heading="H">{Text}</span> 
    <span class="char2" data-heading="E">{Text}</span> 

  </div>
</div>
    </div>
  )
}

export default TextOpen