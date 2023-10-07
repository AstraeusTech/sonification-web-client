import WaveSurferPlayer from "./waveSurfer";

export default function ToolOverlay(): JSX.Element {
  return (
    <div className="absolute bottom-0 w-full px-20">
      <WaveSurferPlayer
        height={100}
        waveColor="rgb(200, 0, 200)"
        progressColor="rgb(100, 0, 100)"
        url={"/sound-combined.wav"}
        container={""}
        barAlign={undefined}
        barHeight={5}
        barWidth={4}
        barGap={2}
        barRadius={3}
        mediaControls={true}
        normalize={true}
      />
    </div>
  );
}
