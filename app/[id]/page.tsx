'use client';
import { useEffect, useRef, useState } from 'react';
import ModelViewer from '../_components/ModelViewer';
import ToolOverlay from '../_components/ToolOverlay';

export default function Sonification({ params }: { params: { id: string } }) {
  const currentTime = useRef(0);
  const [modelUrl, setModelUrl] = useState<string>('');
  const [soundUrl, setSoundUrl] = useState<string>('');

  const container: any = useRef();
  const view = useRef('');

  useEffect(() => {
    const getFileUrls = async () => {
      const response = await fetch(`/api/${params.id}`);
      const data = await response.json();
      return data;
    };

    getFileUrls().then((data) => {
      setModelUrl(data.modelFileUrl);
      setSoundUrl(data.soundFileUrl);
    });
  }, [params.id]);

  return (
    <>
      {modelUrl && soundUrl ? (
        <>
          <ModelViewer view={view} currentTime={currentTime} url={modelUrl} />
          <ToolOverlay view={view} currentTime={currentTime} url={soundUrl} />
        </>
      ) : (
        <div className="container min-h-screen flex items-center justify-center">
            <span className="loading loading-dots loading-lg" />
        </div>
      )}
    </>
  );
}
