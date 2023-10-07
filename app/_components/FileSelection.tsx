'use client';

interface Props {
  setFile: (file: File) => void;
}

export default function FileSelection({ setFile }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      console.log(selectedFile);
      setFile(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files?.[0];
    if (selectedFile) {
      console.log(selectedFile);
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="flex flex-row max-w-2xl h-64 justify-center items-center border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors"
    >
      <div className="flex flex-col items-center">
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
