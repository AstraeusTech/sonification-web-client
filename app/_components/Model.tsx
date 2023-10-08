"use client";

import { Box, Center, OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MutableRefObject, useRef, useState } from "react";
import { DoubleSide, MeshBasicMaterial, Vector3 } from "three";

interface ModelProps {
  pcd?: any;
  size?: Vector3;
  pixelThickness?: number;
  currentTime: MutableRefObject<number>;
  view?: MutableRefObject<string>;
}

export default function Model(props: ModelProps) {
  const [position, setPosition] = useState<Vector3 | undefined>(
    new Vector3((props.size?.x || 0) / 4, 0, props.size?.z || 0)
  );
  const planeRef: any = useRef();
  const camera: any = useRef();
  
  useFrame(({ clock }) => {
  camera.near = 0.1;
    const increments = (30 / (props.size?.x ?? 1)) * 2;
    if (
      planeRef.current &&
      planeRef.current.position.x < (props.size?.x ?? 0) / 2
    ) {
      planeRef.current.position.x += increments;
    }
    props.pcd.material.size = camera.current.zoom;

    switch (props.view?.current) {
      case "top": {
        setPosition(new Vector3(0, 0, props.size?.z ?? 0 * 4));
        break;
      }
      case "bottom": {
        setPosition(new Vector3(0, 0, (props.size?.z ?? 0) * -4));
        break;
      }
      case "side": {
        setPosition(new Vector3(0, (props.size?.z ?? 0) * -4, 0));
        break;
      }
      default: {
        setPosition(position);
        break;
      }
    }
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
      <OrthographicCamera ref={camera} makeDefault position={position} />
    </mesh>
  );
}
