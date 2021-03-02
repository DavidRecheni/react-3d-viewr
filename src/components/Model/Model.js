import React, { useRef } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import ShapeGLTF from '../../Assets/model.gltf'

export default function Model({ rotation, modelScale, position }) {
    const mixer = useRef()

    const gltf = useLoader(GLTFLoader, ShapeGLTF)

    // useFrame(() => mixer.current.rotation.y += 0.01)

    // TODO Link rotation angle to mouse.
    return gltf ? <primitive ref={mixer} object={gltf.scene} color='orange' position={position}  scale={modelScale} rotation={rotation} /> : null
}