import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei/index'
import Model from './Model'

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [10, -10, 65], fov: 40 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <group position={[0, 10, 0]}>
            
              <Model url="/compressed.glb" />
            
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -35, 0]}
              opacity={0.25}
              width={100}
              height={100}
              blur={2}
              far={50}
            />
          </group>
        </Suspense>
      </Canvas>
      <div className="overlay">
        <a href="https://docs.pmnd.rs/react-three-fiber/examples/showcase">
          <b>pmnd.rs</b>
        </a>
        <a className="right" href="https://codesandbox.io/s/baked-ao-f5sgi">
          /csb
        </a>

        <h2>
          There's not the smallest orb
          <br />
          which thou behold'st but in his motion
          <br />
          like an angel sings —
        </h2>
      </div>
    </>
  )
}
