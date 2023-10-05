'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import FileSelection from './_components/FileSelection';
import { Suspense, useEffect, useState } from 'react';
import { PerspectiveCamera } from 'three';
import { PivotControls } from '@react-three/drei';

export default function Home() {
  const [file, setFile] = useState<File>();
  // const ply = useLoader(PLYLoader, file?.name as string);
  const gltf = useLoader(PLYLoader, '/point_cloud.gltf');

  return (
    <div>
      <p>Hello</p>
      <button className="btn btn-primary">Click me</button>
      <FileSelection setFile={setFile} />
      <div className="border">
        <Canvas style={{ height: '100vh', width: '100vw' }} shadows camera={{ position: [-3, 0.5, 3] }}>
          <Suspense>
            {/* <pointLight color="#f6f3ea" position={[10, 5, 10]} intensity={2} /> */}
            <PivotControls anchor={[-1.1, -1.1, -1.1]} scale={0.75} lineWidth={3.5}>
            <primitive scale={[0.25, 0.25, 0.25]} object={gltf.scene} />
            </PivotControls>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
