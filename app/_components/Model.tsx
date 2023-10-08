"use client";

import {
  Center,
  OrbitControls,
  OrthographicCamera,
  Plane,
  Box,
} from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { DoubleSide, MeshBasicMaterial, Vector3 } from "three";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader.js";

interface ModelProps {
  pcd?: any;
  size?: Vector3;
  pixelThickness?: number;
  view?: string
  currentTime: MutableRefObject<number>;
}

export default function Model(props: ModelProps) {
  const planeRef: any = useRef();
  const camera: any = useRef();
  
  useFrame(({ clock }) => {
    planeRef.current.position.x = (props.size?.x ?? 0)/2 * props.currentTime.current/30
    props.pcd.material.size = camera.current.zoom
  });

  return (
    <mesh>
      <mesh ref={planeRef}>
        <Box
          position={[(props.size?.x ?? 0) / -4, 0, (props.size?.z ?? 0) / -4]}
          args={[(props.size?.x || 0) / 2, (props.size?.y || 0) / 2, 2.5]}
          rotation={[0, Math.PI / 2, 0]}
          material={
            new MeshBasicMaterial({
              color: "red",
              side: DoubleSide,
              opacity: 0.5,
              transparent: true,
            })
          }
        />
      </mesh>
      <Center>
        <primitive object={props.pcd} scale={[0.5, 0.5, 0.5]} />
      </Center>
      <OrthographicCamera
        ref={camera}
        makeDefault
        position={[(props.size?.x || 0) / 4, 0, props.size?.z || 0]}
      />
    </mesh>
  );
}
