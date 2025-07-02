import Navbar from '../components/Navbar';
import MyDocuments from '../components/MyDocuments';
import MyBookings from '../components/MyBookings';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">My Dashboard</h1>
        <p className="mb-4">View your cases, bookings, and uploaded documents.</p>
        <MyDocuments />
        <MyBookings />
      </main>
    </div>
  );
}
