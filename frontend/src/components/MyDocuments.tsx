import { useEffect, useState } from 'react';

export default function MyDocuments() {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDocs = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/documents/my', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setDocuments(data.documents);
      else setError(data.error || 'Failed to load documents');
    };
    fetchDocs();
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">My Documents</h2>
      {error && <div className="text-red-600">{error}</div>}
      <ul>
        {documents.map((doc: any) => (
          <li key={doc.id} className="border-b py-2">{doc.file_name} - {doc.analysis_result}</li>
        ))}
      </ul>
    </div>
  );
}
