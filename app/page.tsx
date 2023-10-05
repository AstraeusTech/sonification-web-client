"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import FileSelection from "./_components/FileSelection";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Point } from "@react-three/drei";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";
import THREE, { Vector3, Box3 } from "three";

export default function Home() {
  const [file, setFile] = useState<File>();
  // const ply = useLoader(PLYLoader, file?.name as string);
  // const gltf = useLoader(GLTFLoader, '/point_cloud.gltf');
  const pcd = useLoader(PCDLoader, "/point_cloud.pcd");
  const [center, setCenter] = useState<Vector3>();

  useEffect(() => {
    let box = new Box3().setFromObject(pcd);
    let newCenter = box.getCenter(new Vector3());
    setCenter(newCenter);
  }, [pcd]);

  return (
    <div>
      {/* <p>Hello</p>
      <button className="btn btn-primary">Click me</button>
      <FileSelection setFile={setFile} /> */}
      <div className="border">
        <Canvas
          style={{ height: "100vh", width: "100vw" }}
          shadows
          camera={{
            position: [center?.x ?? 0, center?.y ?? 0, center?.z ?? 0],
          }}
        >
          {/* <pointLight color="#f6f3ea" position={[10, 5, 10]} intensity={2} /> */}
            <primitive object={pcd} scale={[0.25, 0.25, 0.25]} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
