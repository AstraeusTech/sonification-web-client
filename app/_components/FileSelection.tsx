"use client";

import { useState } from "react";

export default function FileSelection() {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      try {
        // Create a FileReader to read the file as an ArrayBuffer
        const fileReader = new FileReader();

        fileReader.onload = async () => {
          const arrayBuffer = fileReader.result; // This is the ArrayBuffer

          // You can now send the ArrayBuffer in the fetch request
          await sendArrayBuffer(arrayBuffer as ArrayBuffer);
        };

        // Read the file as an ArrayBuffer
        fileReader.readAsArrayBuffer(selectedFile);
      } catch (error) {
        // Handle any errors that may occur during the process
        console.error("An error occurred:", error);
      }
    }
  };

  async function sendArrayBuffer(arrayBuffer: ArrayBuffer) {
    try {
      // Convert the ArrayBuffer to a Buffer (Node.js specific)
      const buffer = Buffer.from(arrayBuffer);

      // Send the Buffer in the fetch request
      await fetch("/api/upload", {
        method: "POST",
        body: buffer,
      });

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
      console.log(selectedFile);
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
