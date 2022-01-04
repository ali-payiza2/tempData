import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import Models2 from "./Models2";
import Logo from "./Logo";
import Texture from "./Texture";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Main() {
  const [active, setActive] = useState(false);
//   const colorMap = useLoader(TextureLoader, "images/bg02.jpg");
  return (
    <div>
      <div id="canvas-container">
        <Canvas>
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
          ></mesh>
          <mesh>
            <Suspense fallback={null}>
              <Stars />
              {/* <Models2 /> */}
              <Logo />
              <Texture />

              <OrbitControls />
              {/* <Environment preset="images/bg01.jpg" background /> */}
            </Suspense>
          </mesh>
          {/* <mesh>
<Models2 />
</mesh> */}

          <mesh>{/* <Texture /> */}</mesh>
        </Canvas>
      </div>
    </div>
  );
}
