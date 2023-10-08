"use client";
import { useRef, useState } from "react";
import ModelViewer from "../_components/ModelViewer";
import WaveSurferPlayer from "../_components/waveSurfer";

export default function Sonification() {
  const currentTime = useRef(0);

  const container: any = useRef();

  return (
    <>
      <ModelViewer currentTime={currentTime} />
      <div className="absolute bottom-0 w-full px-20">
        <WaveSurferPlayer
          height={100}
          waveColor="rgb(200, 0, 200)"
          progressColor="rgb(100, 0, 100)"
          url={"/sound-combined.wav"}
          container={container}
          barAlign={"bottom"}
          barHeight={4}
          barWidth={4}
          barGap={2}
          barRadius={3}
          mediaControls={true}
          normalize={true}
          autoplay={false}
          currentTime={currentTime}
        />
      </div>
    </>
  );
}
