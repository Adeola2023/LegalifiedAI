import { useRef, useState } from 'react';

export default function DocumentUploader() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleUpload = async () => {
    if (!fileInput.current?.files?.[0]) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('document', fileInput.current.files[0]);
    const res = await fetch('/api/documents/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setResult(data.message || 'Upload complete');
    setUploading(false);
  };

  return (
    <div className="border p-4 rounded mb-6">
      <input type="file" ref={fileInput} onChange={handleFileChange} className="mb-2" />
      <button onClick={handleUpload} disabled={uploading || !fileName} className="bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50">
        {uploading ? 'Uploading...' : 'Upload Document'}
      </button>
      {fileName && <div className="mt-2 text-sm">Selected: {fileName}</div>}
      {result && <div className="mt-4 text-green-700">{result}</div>}
    </div>
  );
}
