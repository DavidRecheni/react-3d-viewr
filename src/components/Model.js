import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import ShapeGLTF from '../../Assets/model.glb'

export default function Model({ rotation, modelScale, position }) {

    const gltf = useLoader(GLTFLoader, ShapeGLTF)
    const mixer = useRef()

    const loadModel = () => {
        if (gltf.animations.length) {
            mixer.current = new THREE.AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => {
                const action = mixer.current.clipAction(clip)
                action.setLoop(THREE.LoopRepeat)
                action.play();
            });
        }
    }

    useEffect(() => {
        loadModel(gltf)
    }, [])

    useFrame((state, delta) => {
        mixer.current?.update(delta)
    })

    return gltf && <primitive object={gltf.scene} color='orange' position={position} scale={modelScale} rotation={rotation} />
}