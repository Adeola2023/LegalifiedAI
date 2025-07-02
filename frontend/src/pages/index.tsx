import Head from 'next/head';
import Navbar from '../components/Navbar';
import LanguageSwitcher from '../components/LanguageSwitcher';
import DocumentUploader from '../components/DocumentUploader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>LegalifiedAI – Global Legal Platform</title>
      </Head>
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to LegalifiedAI</h1>
        <p className="mb-6">Upload legal documents, get instant explanations, book lawyers, and more – in your language.</p>
        <LanguageSwitcher />
        <DocumentUploader />
        {/* DocumentUploader, ChatPanel, and other components will go here */}
      </main>
    </div>
  );
}
