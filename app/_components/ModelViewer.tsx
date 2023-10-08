"use client";

import {
  Center,
  OrbitControls,
  OrthographicCamera,
  Plane,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Box3, DoubleSide, MeshBasicMaterial, Vector3 } from "three";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";
import Model from "./Model";

interface ModelViewerProps {
  file?: File;
  view?: string;
  currentTime: MutableRefObject<number>;
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
      <Model pcd={pcd} size={size} currentTime={props.currentTime} view={props.view} />
      
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
