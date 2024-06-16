import React, { useContext } from 'react'
import './Test.scss'
import { Shared } from '../../Shared'

function Test() {
	const {Text } = useContext(Shared)

  return (
    <div class="panel">
    <h1 class="jj">
        <span>{Text}</span> 
        <span>{Text}</span>
    </h1>
    <h1 class="jj">
        <span>{Text}</span> 
        <span>{Text}</span>
    </h1>
</div>
  )
}

export default Test