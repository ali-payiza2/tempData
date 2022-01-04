import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

import React from 'react'

export default function Logo() {
    const fbx = useLoader(FBXLoader, 'images/logo.fbx')
    return (
    <mesh className='logoClass' position={[0,0,0]} scale={[0.1,0.1,0.1]}   >
    {/* <mesh className='logoClass' position={[1, -10, -10]}> */}
    {/* <Geometry args={[1, 32, 32]} /> */}
    
    <primitive object={fbx} />
    </mesh>
    
    )
}

