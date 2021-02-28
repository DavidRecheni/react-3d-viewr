import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import ShapeGLTF from '../Assets/model.glb'

export default function Model() {
    const mixer = useRef()
    
    const gltf = useLoader(GLTFLoader, ShapeGLTF)

    useFrame(({ clock }) => mixer.current && mixer.current.update(clock.getDelta()))
    return gltf ? <primitive object={gltf.scene} color='orange' scale={[.02, .02, .02]} /> : null
}