import React, { useContext } from 'react'
import './MilkText.css'
import { Shared } from '../../Shared'

function MilkText() {
  const {Text } = useContext(Shared)

  return (
    <div style={{
          height:150,
          position: 'relative',
          top: -70,
        }}>
      <div><div class="container">
      <p>{Text}</p>
      <p>{Text}</p>
        </div></div>
    </div>
  )
}

export default MilkText