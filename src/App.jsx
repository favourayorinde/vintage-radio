import './App.css'
import { Canvas } from '@react-three/fiber'
import { Model } from './assets/Components/VintageRadio'
import { Circle, Environment, OrbitControls } from '@react-three/drei'
import Dropdown from './assets/Components/Dropdown'
import Shadows from './assets/Components/Shadows'
import { useState } from 'react'

function App() {

  const [selectedOption, setSelectedOption] = useState('')
  const [customColors, setcustomColors] = useState({
    BodyHull : "wheat",
    MiddleRim: "wheat",
    Grill : "white",
    BackPanel : "orange",
    KnobRim : "gray",
    Knobs : "wheat",
    RodHandle : "orange",
    RubberHandle : "wheat",
    HandlePadding : "orange",
    Band : "orange",
    KnobMarker : "orange",
    Screen : "cream",
    DisplayText : "black",})

  const handleColors = (e) => {
    setcustomColors({...customColors, [e.target.name] : e.target.value})
  }

  console.log(customColors)

  return (
    <div className="App">
        <Canvas
          shadows
          
          className='canvas'
          camera={{ position: [20, 5, 20], fov: 8 }}>
          <color attach="background" args={['#fff']} />
          <fog attach="fog" args={['#FFF', 30, 75]} />
          <Environment files='forest.exr'/>
          <directionalLight position={[-2, 10, 5]} intensity={2} />

          <Model customColors = {customColors}/>
          <Circle rotation={[-Math.PI / 2, 0, 0]}position={[0, -0.1, 0]} args={[100, 100]} color={'#FFF'}/>
          <OrbitControls target={[0, 1, 0]} minPolarAngle={0.31} maxPolarAngle={Math.PI / 2 - 0.09}/>
          <Shadows />
        </Canvas>
        <div className='settings'>
          <Dropdown
          selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
          <div className="colorwrapper">
            <p>Change Color</p>
          <input
            name={selectedOption}
            value={customColors[selectedOption]}
            className= 'colorchange' type='color'
            onChange={handleColors} /></div>
        </div>
    </div>
  )
}

export default App
