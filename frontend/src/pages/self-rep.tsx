import Navbar from '../components/Navbar';

export default function SelfRep() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Self-Representation Toolkit</h1>
        <p className="mb-4">Get a personalized roadmap, scripts, and guides for representing yourself in court.</p>
        {/* Add form for case type, jurisdiction, and AI-generated roadmap here */}
      </main>
    </div>
  );
}
