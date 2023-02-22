import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage } from '@react-three/drei'
import './App.css'

import Window from './components/Window';

function App() {
  const [frameValue, setFrameValue] = useState(1);
  const [trimValue, setTrimValue] = useState(0.5);
  const [isWindowChecked, setIsWindowChecked] = useState(false);

  const handleFrameValueChange = (event: any) => {
    setFrameValue(event.target.value);
  }

  const handleTrimValueChange = (event: any) => {
    setTrimValue(event.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      setFrameValue(0);
      setTrimValue(0);
    }, 2000);
  }, [])

  return (
    <div className="App">
      <div className='controls'>
        <details>
          <summary>Settings</summary>
          <div className='input'>
            <span>Frame</span>
            <input type="range" min="0" max="1" step="0.01" value={frameValue} onChange={handleFrameValueChange} />
          </div>
          <div className='input'>
            <span>Trim</span>
            <input type="range" min="0" max="0.5" step="0.01" value={trimValue} onChange={handleTrimValueChange} />
          </div>
          <div className='input'>
            <input type="checkbox" checked={isWindowChecked} onChange={() => setIsWindowChecked(!isWindowChecked)} />
            <span>Show window</span>
          </div>
        </details>
      </div>
      <Canvas camera={{ fov: 50 }}>
        {/* <ambientLight intensity={0.5} /> */}
        {/* <directionalLight position={[10, 0, 5]} intensity={0.2} /> */}
        <PresentationControls speed={2}>
          <Stage preset={'rembrandt'} environment={'apartment'} intensity={0} shadows={false}>
            <Window receiveShadows castShadows frameValue={frameValue} trimValue={trimValue} showWindow={isWindowChecked} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  )
}

export default App
