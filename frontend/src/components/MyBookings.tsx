import { useEffect, useState } from 'react';

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/lawyers/my', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setBookings(data.bookings);
      else setError(data.error || 'Failed to load bookings');
    };
    fetchBookings();
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">My Bookings</h2>
      {error && <div className="text-red-600">{error}</div>}
      <ul>
        {bookings.map((b: any) => (
          <li key={b.id} className="border-b py-2">Lawyer ID: {b.lawyer_id} - Date: {b.date} - Status: {b.status}</li>
        ))}
      </ul>
    </div>
  );
}
