import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas } from 'react-three-fiber'

import Model from './Model/Model'
import Box from './Box/Box'

import './App.css'

function App() {

  const [rx, setRx] = useState(0)
  const [ry, setRy] = useState(0)
  const [rz, setRz] = useState(0)
  
  return (
    <Canvas
      camera={{ position: [0, 0, -10], fov: 50 }}
      onCreated={({ camera, gl, scene }) => {
        camera.lookAt(new THREE.Vector3(0, 0, 0))
        scene.background = new THREE.Color('lightblue')
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<Box color="orange" scale={[3, 3, 3]}></Box>}>
        <Model rotation={[rx, ry, rz]} />
      </Suspense>
    </Canvas>
  );
}

export default App;
