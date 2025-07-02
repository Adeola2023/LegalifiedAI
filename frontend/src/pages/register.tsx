import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', language: 'en' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      window.location.href = '/login';
    } else {
      setError(data.error || 'Registration failed');
    }
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border p-2 rounded" required />
        <select name="language" value={form.language} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="ar">العربية</option>
          <option value="hi">हिन्दी</option>
          <option value="sw">Kiswahili</option>
        </select>
        <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded">Register</button>
        {error && <div className="text-red-600">{error}</div>}
      </form>
    </main>
  );
}
