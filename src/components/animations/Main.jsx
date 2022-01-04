import React, { useState, Suspense } from "react";
import { Canvas ,extend} from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls, Stars,Effects } from "@react-three/drei";
import Models2 from "./Models2";
import Logo from "./Logo";
import Texture from "./Texture";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import Glitch from "./Glitch";
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { GridHelper } from "three";
import Grid from "./Grid";
import * as THREE from 'three'
extend({BloomPass,GlitchPass})

export default function Main() {
  const [active, setActive] = useState(false);

  const PLANE_VECTOR = [-5, 0, 2]

  const MyPane = () => {
    const [plane] = useState(() => new THREE.Plane(new THREE.Vector3(...PLANE_VECTOR), 2))
  
    return <planeHelper args={[plane, 5, 'green']} />
  }

  const radius = 10;
const radials = 16;
const circles = 8;
const divisions = 64;

const helper = new THREE.PolarGridHelper( radius, radials, circles, divisions );
// scene.add( helper );


  return (
    <div>
      <div id="canvas-container">
        <Canvas >
         
        <Effects>
        {/* <bloompass attachArray="passes"/> */}
<glitchPass attachArray="passes"/>

</Effects>


          <mesh>
            {/* <ambientLight intensity={0.1} /> */}
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.1} /> 


            <directionalLight color="red" position={[0, 1, 5]} />
          </mesh>

          <mesh
            scale={active ? 1.5 : 1}
            onPointerEnter={() => setActive(true)}
            onPointerOut={() => setActive(false)}
          >
          
           
          </mesh>
          <mesh>
            <Suspense fallback={null}>
            <Stars />
            {/* <Grid /> */}
              {/* <Models2 /> */}
          

      <Logo  />


      <Texture />


              <OrbitControls  autoRotate autoRotateSpeed={-0.2}/>
              {/* <Environment preset="images/bg01.jpg" background /> */}
          {/* <Grid /> */}
          {/* <gridHelper args={[10, 10, `white`, `gray`]} /> */}
          {/* <gridHelper args={[5, 10, `red`, `green`]} /> */}
            </Suspense>
          </mesh>
          <mesh position={[0, 4, 0]}>

          <gridHelper args={[50, 100, `red`, `green`]} />

          </mesh>
          <mesh position={[0, -3, 0]}>

          <gridHelper args={[50, 100, `red`, `green`]} />

          </mesh>
          <mesh position={[2, -2, 2]}>

          {/* <gridHelper args={[50, 100, `red`, `green`]} /> */}
          {/* <polarGridHelper args={[-5, 10, `red`, `green`]} /> */}
          {/* <gridHelper args={[5, 10, `red`, `red`]} position={[-5,-5,5]}/> */}
          {/* <gridHelper args={[50, 6, 'black`, `black`]} position={[0,-3,0]} /> */}

         {/* <MyPane /> */}
         {/* <planeHelper/> */}
          </mesh>
        
{/* <helper args={[50, 100, `red`, `green`]} /> */}

        </Canvas>

        
      </div>
    </div>
  );
}
