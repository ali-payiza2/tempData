import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import React from 'react'
import { Canvas ,extend} from "@react-three/fiber";




export default function Glitch(renderer) {
// const composer = new EffectComposer( renderer );

// const renderPass = new RenderPass( scene, camera );
// composer.addPass( renderPass );

// const glitchPass = new GlitchPass();
// composer.addPass( glitchPass );




<Effects>
{/* <bloompass attachArray="passes"/> */}
<glitchPass attachArray="passes"/>

</Effects>
// 	requestAnimationFrame( Glitch );

// 	composer.render();

}