import React, { useContext } from 'react'
import './Glowing.css'
import { Shared } from '../../Shared'
function Glowing() {
  const {Text } = useContext(Shared)

  return (
    <div style={{
      height:150,
      position:'relative',
      color: 'white'
        }}>
        <ul>
        <li>{Text}</li>
        <li>{Text}</li>
      </ul>
    </div>
  )
}

export default Glowing