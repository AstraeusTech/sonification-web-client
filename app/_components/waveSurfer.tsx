// Import React hooks
import { useEffect, useRef, useState } from "react";

// Import WaveSurfer
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";

// WaveSurfer hook
const useWavesurfer = (containerRef: any, options: WaveSurferOptions) => {
  const [wavesurfer, setWavesurfer] = useState(null);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

    const ws: any = WaveSurfer.create({
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
export default function WaveSurferPlayer(props: WaveSurferOptions) {
  const containerRef: any = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const wavesurfer: any = useWavesurfer(containerRef, props);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return;

    setCurrentTime(0);
    setIsPlaying(false);

    const subscriptions = [
      wavesurfer.on("play", () => setIsPlaying(true)),
      wavesurfer.on("pause", () => setIsPlaying(false)),
      wavesurfer.on("timeupdate", (currentTime: any) =>
        setCurrentTime(currentTime)
      ),
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [wavesurfer]);

  return <div ref={containerRef} style={{ minHeight: "120px" }} />;
}