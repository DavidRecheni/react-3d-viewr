import React, { useRef } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import ShapeGLTF from '../Assets/model.glb'

export default function Model({ rotation }) {
    const mixer = useRef()

    const gltf = useLoader(GLTFLoader, ShapeGLTF)

    useFrame(() => mixer.current.rotation.y += 0.01)


    // TODO Link rotation angle to mouse.
    return gltf ? <primitive ref={mixer} object={gltf.scene} color='orange' position={[0, -1, 0]} rotation={rotation} scale={[.03, .03, .03]} /> : null
}