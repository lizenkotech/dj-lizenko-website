import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Music, Plus, CheckCircle, XCircle, PlayCircle, Clock } from 'lucide-react';

const SongRequests = () => {
  const { t } = useTranslation();
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [requests, setRequests] = useState([
    { id: 1, song: 'Blinding Lights', artist: 'The Weeknd', status: 'played', time: '20:15' },
    { id: 2, song: 'Levitating', artist: 'Dua Lipa', status: 'accepted', time: '20:20' },
    { id: 3, song: 'Stay', artist: 'The Kid LAROI & Justin Bieber', status: 'pending', time: '20:25' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (songName.trim() && artistName.trim()) {
      const now = new Date();
      const time = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
      
      setRequests([...requests, {
        id: requests.length + 1,
        song: songName,
        artist: artistName,
        status: 'pending',
        time
      }]);
      setSongName('');
      setArtistName('');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'played':
        return <PlayCircle className="w-5 h-5 text-blue-400" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-500/20 border-green-500/30 text-green-300';
      case 'played':
        return 'bg-blue-500/20 border-blue-500/30 text-blue-300';
      case 'rejected':
        return 'bg-red-500/20 border-red-500/30 text-red-300';
      default:
        return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Request Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full p-3">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">{t('requestSong')}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-purple-300 text-sm font-semibold mb-2">
                {t('songName')}
              </label>
              <input
                type="text"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter song name..."
              />
            </div>
            
            <div>
              <label className="block text-purple-300 text-sm font-semibold mb-2">
                {t('artistName')}
              </label>
              <input
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter artist name..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              {t('submitRequest')}
            </button>
          </form>
        </div>

        {/* Requests List */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <h3 className="text-xl font-bold text-white mb-6">{t('yourRequests')}</h3>
          
          <div className="space-y-3">
            {requests.map((request) => (
              <div
                key={request.id}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-white font-semibold">{request.song}</h4>
                      <span className="text-gray-400">by {request.artist}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm">{request.time}</span>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${getStatusColor(request.status)}`}>
                    {getStatusIcon(request.status)}
                    <span className="text-sm font-medium capitalize">
                      {t(`requestStatus.${request.status}`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {requests.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <Music className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No song requests yet. Be the first to request a song!</p>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <h3 className="text-white font-semibold mb-2">💡 Tips</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Request popular songs for better chances of being played</li>
            <li>• Be specific with song names and artists</li>
            <li>• Don't spam the same request multiple times</li>
            <li>• Check the status of your requests here</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SongRequests;
