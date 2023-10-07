"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls, Center } from "@react-three/drei";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";
import { Vector3, Box3 } from "three";

export default function ModelViewer() {
// const pcd = useLoader(PCDLoader, file?.name as string);
const pcd = useLoader(PCDLoader, "/point_cloud.pcd");
const [size, setSize] = useState<Vector3>();

useEffect(() => {
  let box = new Box3().setFromObject(pcd);
  let size = box.getSize(new Vector3());
  setSize(size);
}, [pcd]);

  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      shadows
      camera={{
        position: [(size?.x || 0)/4, 0, (size?.z || 0)],
      }}
    >
      <ambientLight intensity={0.5} />
      <Center>
        <primitive object={pcd} scale={[0.25, 0.25, 0.25]} />
      </Center>
      <OrbitControls />
    </Canvas>
  );
}
