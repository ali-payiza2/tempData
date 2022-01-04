import React from 'react';
import {  useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Texture() {
    const colorMap = useLoader(TextureLoader, 'images/bg02.jpg')
  return (
    <>
      <ambientLight intensity={0.01} />
      <directionalLight />
      <mesh position={[0,-10,0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  )
}

