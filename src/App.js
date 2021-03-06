import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas } from 'react-three-fiber'

import Model from './components/Model/Model'
import Box from './components/Box/Box'

import Zoom from './components/Control/Zoom/Zoom'
import Position from './components/Control/Position/Position'
import Rotation from './components/Control/Rotation/Rotation'

import { OrbitControls } from '@react-three/drei'

import './App.css'

function App() {

  const [position, setPosition] = useState([0, -1, 0])
  const [modelScale, setModelScale] = useState([.03, .03, .03])
  const [rotation, setRotation] = useState([0, 0, 0])

  return (
    <div id='main-container'>
      <Canvas
        style={{ position: 'absolute', cursor: 'grab' }}
        camera={{ position: [0, 0, -10], fov: 50 }}
        onCreated={({ camera, gl, scene }) => {
          camera.lookAt(new THREE.Vector3(0, 0, 0))
          scene.background = new THREE.Color('lightblue')
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}>
        <OrbitControls
          enableRotate={true}
        />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<Box color="orange" scale={[3, 3, 3]}></Box>}>
          <Model position={position} modelScale={modelScale} rotation={rotation} />
        </Suspense>
      </Canvas>
      <div style={{ zIndex: 1, position: 'fixed' }}>
        <Position position={position} setPosition={pos => setPosition(pos)} />
        <Rotation rotation={rotation} setRotation={rot => setRotation(rot)} />
        <Zoom modelScale={modelScale} setModelScale={sc => setModelScale(sc)}></Zoom>
      </div>
    </div>
  );
}

export default App;
