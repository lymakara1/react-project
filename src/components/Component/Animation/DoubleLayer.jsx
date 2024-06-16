import React, { useContext } from 'react'
import './DoubleLayer.css'
import { Shared } from '../../Shared'

function DoubleLayer() {
  const {Text } = useContext(Shared)
  return (
<div style={{
  height:150,
  position:'relative',
  top: -20,
  color: 'white'
    }}>
  <div class="wrapper">
<h1 data-heading="HELLO">{Text}</h1>
</div>

    </div>
  )
}

export default DoubleLayer