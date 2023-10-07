"use client";
import { WaveSurferPlayer } from "../_components/AudioPlayer";
import ModelViewer from "../_components/ModelViewer";

export default function Sonification() {
  return (
    <>
      <ModelViewer />
      <div className="absolute bottom-0 w-full px-20">
        <WaveSurferPlayer
          height={100}
          waveColor="rgb(200, 0, 200)"
          progressColor="rgb(100, 0, 100)"
          url={"/sound-combined.wav"}
          container={""}
          barAlign="bottom"
          barHeight={5}
          barWidth={4}
          barGap={2}
          barRadius={3}
          mediaControls={true}
          normalize={true}
        />
      </div>
    </>
  );
}
