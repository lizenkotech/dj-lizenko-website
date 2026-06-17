import { useTranslation } from 'react-i18next';
import { Music, MessageSquare, ListMusic, Shield } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const { t } = useTranslation();

  const navItems = [
    { id: 'home', label: t('home'), icon: Music },
    { id: 'chat', label: t('chat'), icon: MessageSquare },
    { id: 'requests', label: t('requests'), icon: ListMusic },
    { id: 'admin', label: t('admin'), icon: Shield }
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-purple-300" />
            <span className="text-xl font-bold">DJ Lizenko</span>
          </div>
          
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-purple-700 text-white'
                      : 'text-purple-200 hover:bg-purple-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
            
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
