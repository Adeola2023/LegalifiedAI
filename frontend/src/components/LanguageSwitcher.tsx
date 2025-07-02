const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'sw', label: 'Kiswahili' },
];

export default function LanguageSwitcher() {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Language:</label>
      <select className="border rounded px-2 py-1">
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>{lang.label}</option>
        ))}
      </select>
    </div>
  );
}
