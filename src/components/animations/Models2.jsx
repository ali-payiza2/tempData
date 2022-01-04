import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Models2() {
  const group = useRef()
  const { nodes, materials } = useGLTF('images/demo4.glb');


  return (
      <>
    {/* <group ref={group}  dispose={null}>
    
    <mesh
    castShadow
    receiveShadow
    geometry={nodes.Circle.geometry}
    material={materials['Material.001']}
    position={[0, -0.01, 0]}
    scale={[0.64, 0.64, 0.64]}
    />
</group> */}




      <group name="model">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          geometry={nodes.Wolf2_fur__fella3_jpg_001_0.geometry}
          material={materials.Wolf_Fur}
          skeleton={nodes.Wolf2_fur__fella3_jpg_001_0.skeleton}
          />
        <skinnedMesh
          geometry={nodes.Wolf3_claws_0.geometry}
          material={materials.Wolf_claws}
          skeleton={nodes.Wolf3_claws_0.skeleton}
          />
        <skinnedMesh
          geometry={nodes.Wolf3_teeth.geometry}
          material={materials['Wolf Teeth']}
          skeleton={nodes.Wolf3_teeth.skeleton}
          />
        <skinnedMesh
          geometry={nodes.Wolf3_eyes_0.geometry}
          material={materials['Wolf Eyes']}
          skeleton={nodes.Wolf3_eyes_0.skeleton}
          />
        <skinnedMesh
          geometry={nodes.Wolf1_Material__wolf_col_tga_0.geometry}
          material={materials.Wolf_1}
          skeleton={nodes.Wolf1_Material__wolf_col_tga_0.skeleton}
          />
      </group>
 
          </>
  )
}
