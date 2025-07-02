import Navbar from '../components/Navbar';

export default function Lawyers() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Find a Lawyer</h1>
        <p className="mb-4">Search for lawyers by specialty, language, and location. Book a consultation instantly.</p>
        {/* Add search form and lawyer list here */}
      </main>
    </div>
  );
}
