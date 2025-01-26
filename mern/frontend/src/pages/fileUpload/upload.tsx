import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5001/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        console.log('File info:', result.file);
      } else {
        setMessage(result.message || 'File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('An error occurred during the file upload.');
    }
  };

  return (
    <div>
      <h1>Upload a File</h1>
      <form onSubmit={handleUpload} encType="multipart/form-data">
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Upload;
