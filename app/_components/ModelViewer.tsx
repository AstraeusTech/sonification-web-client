"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { MutableRefObject, useEffect, useState } from "react";
import { Box3, Vector3 } from "three";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";
import Model from "./Model";

interface ModelViewerProps {
  file?: File;
  currentTime: MutableRefObject<number>;
  view: MutableRefObject<string>;
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
    <Canvas className="w-screen" style={{ height: "100vh" }} shadows>
      <Model pcd={pcd} size={size} currentTime={props.currentTime} view={props.view} />
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
