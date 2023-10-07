"use client";

import { Center, OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Box3, Vector3 } from "three";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";

interface ModelViewerProps {
  file?: File;
}

export default function ModelViewer(props: ModelViewerProps) {
  // const pcd = useLoader(PCDLoader, file?.name as string);
  const pcd = useLoader(PCDLoader, "/point.pcd");
  const [size, setSize] = useState<Vector3>();

  pcd.material.size = 2.5;

  useEffect(() => {
    let box = new Box3().setFromObject(pcd);
    let size = box.getSize(new Vector3());
    setSize(size);
  }, [pcd]);

  return (
    <Canvas style={{ height: "100vh", width: "100vw" }} shadows>
      <Center>
        <primitive object={pcd} scale={[0.5, 0.5, 0.5]} />
      </Center>
      <OrthographicCamera
        makeDefault
        position={[(size?.x || 0) / 4, 0, size?.z || 0]}
      />
      <OrbitControls />
    </Canvas>
  );
}
