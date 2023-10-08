import { MutableRefObject } from "react";
import WaveSurferPlayer from "./waveSurfer";

interface ToolOverlayProps {
  currentTime: MutableRefObject<number>;
  view: MutableRefObject<string>;
}

export default function ToolOverlay(props: ToolOverlayProps): JSX.Element {
  return (
    <div className="absolute bottom-10 w-full p-5 flex flex-row gap-10 justify-center items-center rounded-lg">
      <div className="w-screen pl-10 ">
        <WaveSurferPlayer
          height={100}
          waveColor="rgb(125, 25, 25)"
          progressColor="rgb(255, 0, 0)"
          url={"/sound-combined.wav"}
          container={""}
          barHeight={5}
          barWidth={4}
          barGap={2}
          barAlign={"bottom"}
          barRadius={2.5}
          mediaControls={true}
          normalize={true}
          currentTime={props.currentTime}
        />
      </div>
      <select
        onChange={(obj) => {
          props.view.current = obj.target.value;
        }}
        defaultValue={"select"}
        className="select text-lg max-w-xs bg-black text-white h-full pr-10"
      >
        <option value={"select"} disabled>
          Select view
        </option>
        <option value={"top"}>Top</option>
        <option value={"bottom"}>Bottom</option>
        <option value={"side"}>Side</option>
      </select>
    </div>
  );
}
