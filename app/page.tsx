'use client';

import { Canvas, useLoader } from "@react-three/fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import FileSelection from "./_components/FileSelection";

export default function Home() {
  const ply = useLoader(PLYLoader, "point_cloud.ply");
  console.log(ply);

  return (
    <div>
      <p>Hello</p>
      <button className="btn btn-primary">Click me</button>
      <FileSelection />
      <div className="border">
        <Canvas>
          <ambientLight intensity={0.1} />
          <primitive object={ply} />
        </Canvas>
      </div>
    </div>
  )
}
