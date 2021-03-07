import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas } from 'react-three-fiber'

import Model from './components/Model'
import Box from './components/Box'

import Zoom from './components/Control/Zoom'
import Position from './components/Control/Position'
import Rotation from './components/Control/Rotation'

import { OrbitControls } from '@react-three/drei'

import './App.css'
import { ToolsContainer } from './components/UI'


function App() {

  const [position, setPosition] = useState([0, -1, 0])
  const [modelScale, setModelScale] = useState([.03, .03, .03])
  const [rotation, setRotation] = useState([0, 0, 0])

  const POINTLIGHT_POSITION = [10, 10, 10],
    DEFAULT_CAMERA = { position: [0, 0, -10], fov: 50 }

  const initCanvas = ({ camera, gl, scene }) => {
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    scene.background = new THREE.Color('lightblue')
    gl.shadowMap.enabled = true
    gl.shadowMap.type = THREE.PCFSoftShadowMap
  }

  return (
    <div id='main-container'>
      <Canvas
        style={{ position: 'absolute', cursor: 'grab' }}
        camera={DEFAULT_CAMERA}
        onCreated={ initCanvas }>
        <OrbitControls />
        <ambientLight />
        <pointLight position={POINTLIGHT_POSITION} />
        <Suspense fallback={<Box color="orange"></Box>}>
          <Model position={position} modelScale={modelScale} rotation={rotation} />
        </Suspense>
      </Canvas>
      <ToolsContainer bottom left>
        <h4>Model control panel</h4>
        <Position position={position} setPosition={setPosition} />
        <Rotation rotation={rotation} setRotation={setRotation} />
      </ToolsContainer>
      <ToolsContainer bottom right>
        <Zoom modelScale={modelScale} setModelScale={sc => setModelScale(sc)}></Zoom>
      </ToolsContainer>
    </div>
  );
}

export default App;
