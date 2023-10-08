"use client";
import { useRef, useState } from "react";
import ModelViewer from "../_components/ModelViewer";
import ToolOverlay from "../_components/ToolOverlay";

export default function Sonification() {
  const currentTime = useRef(0);

  const container: any = useRef();
  const view = useRef("");


  return (
    <>
      <ModelViewer view={view} currentTime={currentTime} />
      <ToolOverlay view={view} currentTime={currentTime} />
    </>
  );
}
