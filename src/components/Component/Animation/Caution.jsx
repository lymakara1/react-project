import React, { useContext } from 'react'
import './Caution.css'
import { Shared } from '../../Shared'
function Caution() {
  const {Text} = useContext(Shared)
  return (
    <div>
        <div class="area">⚠ {Text} ⚠</div>
    </div>
  )
}

export default Caution