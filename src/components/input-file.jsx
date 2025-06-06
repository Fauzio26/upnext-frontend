import React, { useState } from 'react';

const FileInput = ({ title = "Upload File",accept, onChange }) => {
  const [fileName, setFileName] = useState('');

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(file); // Kirim file langsung ke parent
    }
  };

  return (
    <div className='w-full flex flex-col gap-2'>
      <h4 className='font-medium'>{title}</h4>
      <div className="flex w-full rounded-md">
        <input
          type="text"
          value={fileName}
          readOnly
          placeholder="File yang dipilih"
          className="w-full flex-1 p-2 text-base border-t-2 border-b-2 border-l-2 border-gray-400 border-r-0 rounded-l-md outline-none"
        />
        <label
          htmlFor="file-upload"
          className="bg-[#567CBD] text-white p-2 flex items-center justify-center rounded-r-md cursor-pointer"
        >
          Pilih File
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFile}
          accept={accept}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default FileInput;
