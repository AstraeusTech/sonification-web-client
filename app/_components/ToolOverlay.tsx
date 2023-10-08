import { MutableRefObject } from "react";
import WaveSurferPlayer from "./waveSurfer";

interface ToolOverlayProps {
  view: MutableRefObject<string>;
}
export default function ToolOverlay(props: ToolOverlayProps): JSX.Element {
  return (
    <div className="absolute bottom-10 w-full p-5 flex flex-row gap-10 bg-indigo-100/50 justify-center items-center rounded-lg  ">
      <div className="w-screen ">
        <WaveSurferPlayer
          height={100}
          waveColor="rgb(0, 0, 0)"
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
        />
      </div>
      <select
        onChange={(obj) => {
          props.view.current = obj.target.value;
        }}
        defaultValue={"select"}
        className="select text-lg max-w-xs bg-black text-white h-full"
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
