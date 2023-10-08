// Import React hooks
import { MutableRefObject, useEffect, useRef, useState } from "react";

// Import WaveSurfer
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";

interface WaveSurferProps extends WaveSurferOptions {
  currentTime: MutableRefObject<number>;
}

// WaveSurfer hook
const useWavesurfer = (containerRef: any, options: WaveSurferProps) => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | undefined>();

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

    const ws: WaveSurfer = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [options, containerRef]);

  return wavesurfer;
};

// Create a React component that will render wavesurfer.
// Props are wavesurfer options.
export default function WaveSurferPlayer(props: WaveSurferProps) {
  const containerRef: any = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const wavesurfer: WaveSurfer | undefined = useWavesurfer(containerRef, props);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return;

    setCurrentTime(0);
    setIsPlaying(false);

    const subscriptions = [
      wavesurfer.on("play", () => setIsPlaying(true)),
      wavesurfer.on("pause", () => setIsPlaying(false)),
      wavesurfer.on("timeupdate", (currentTime: any) => {
        setCurrentTime(currentTime);
        props.currentTime.current = currentTime;
      }),
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [props.currentTime, wavesurfer]);

  return <div ref={containerRef} style={{ minHeight: "120px" }} />;
}
