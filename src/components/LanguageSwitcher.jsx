import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'nl', name: 'NL', flag: '🇳🇱' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'fr', name: 'FR', flag: '🇫🇷' }
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5" />
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
