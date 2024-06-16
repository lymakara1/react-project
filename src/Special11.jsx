import { useState } from 'react'
import Nav from './Component/Nav'
import DisplayText from './Component/DisplayText'
import Mode from './Component/Mode'
import { Shared } from './Shared'
function Special11() {
 
  const [ModeClicked,setModeClicked] = useState()
  const [Text,setText] = useState("Welcome to GIC2B")
  const [fullscreen,setFullScreen]= useState()

  return<Shared.Provider value={{
    ModeClicked,setModeClicked,Text,setText,fullscreen,setFullScreen
    }}>
      <div class="content content--canvas">
				<h2 class="content_title flex flex-col justify-center">
          {/* <Nav/> */}
          <DisplayText/>
          <Mode/>
        </h2>
			</div>

  </Shared.Provider>

}

export default Special11
