"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FileSelection() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      await handleFile(selectedFile);
    }
  };

  const handleFile = async (file: File) => {
    
    setLoading(true);
    try {
      // Create a FileReader to read the file as an ArrayBuffer
      const fileReader = new FileReader();

      fileReader.onload = async () => {
        const image = new Image();
        image.src = fileReader.result as string;

        image.onload = async () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Calculate the new dimensions while keeping aspect ratio
          const maxWidth = 1280;
          const maxHeight = 720;
          let width = image.width;
          let height = image.height;

          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }

          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }

          canvas.width = width;
          canvas.height = height;

          // Draw the image on the canvas with the new dimensions
          ctx?.drawImage(image, 0, 0, width, height);

          // Convert the canvas to a compressed format such as JPEG or WebP
          const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7);

          // Convert the compressed data URL to an ArrayBuffer
          const arrayBuffer = await new Promise<ArrayBuffer>((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", compressedDataUrl);
            xhr.responseType = "arraybuffer";
            xhr.onload = () => {
              resolve(xhr.response);
            };
            xhr.send();
          });

          // You can now send the ArrayBuffer in the fetch request
          await sendArrayBuffer(arrayBuffer);
        };
      };

      // Read the file as a data URL
      fileReader.readAsDataURL(file);
    } catch (error) {
      // Handle any errors that may occur during the process
      console.error("An error occurred:", error);
    }
  };

  async function sendArrayBuffer(arrayBuffer: ArrayBuffer) {
    try {
      // Convert the ArrayBuffer to a Buffer (Node.js specific)
      const buffer = Buffer.from(arrayBuffer);

      // Send the Buffer in the fetch request
      const res = await fetch("/api/upload", {
        method: "POST",
        body: buffer,
      });

      const data = await res.json();

      console.log(data);

      router.push(`/${data.id as string}` ?? "/");

      // Handle success or errors here
    } catch (error) {
      // Handle network or fetch-related errors here
      console.error("An error occurred:", error);
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  return loading ? (
    <span className="loading loading-dots loading-lg" />
  ) : (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="flex flex-row max-w-2xl h-64 justify-center items-center border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors"
    >
      <div className="flex flex-col items-center mx-24">
        <p>
          <b>Drag and drop</b> or <b>select</b> a file to upload
        </p>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
