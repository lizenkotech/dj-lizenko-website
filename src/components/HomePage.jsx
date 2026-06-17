import { useTranslation } from 'react-i18next';
import { Play, Calendar, Music, Users, Sparkles } from 'lucide-react';

const HomePage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Music,
      title: t('liveChatTitle'),
      description: t('liveChatDesc')
    },
    {
      icon: Users,
      title: t('songRequestsTitle'),
      description: t('songRequestsDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full p-8">
                  <Music className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
              {t('heroTitle')}
            </h1>
            
            <p className="text-2xl sm:text-3xl text-purple-300 mb-4 font-semibold">
              {t('heroSubtitle')}
            </p>
            
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                {t('ctaBook')}
              </button>
              
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-200 border border-white/20 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                {t('ctaListen')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Interact Live
          </h2>
          <p className="text-gray-400 text-lg">
            Connect with DJ Lizenko during events
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-200 hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-4 w-fit mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Music Player Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6">
                <Music className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Latest Mix
              </h3>
              <p className="text-purple-300 mb-4">
                DJ Lizenko - Summer Vibes 2024
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <button className="bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Play
                </button>
                <span className="text-gray-400">45:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
