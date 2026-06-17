import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, MessageSquare, ListMusic, Check, X, Play, Trash2, Lock } from 'lucide-react';

const AdminPanel = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('chat');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'MusicFan123', text: 'Love the beats tonight!', time: '20:05' },
    { id: 2, user: 'PartyGoer', text: 'Can you play some techno?', time: '20:07' },
    { id: 3, user: 'DanceLover', text: 'This is amazing! 🔥', time: '20:10' },
  ]);

  const [songRequests, setSongRequests] = useState([
    { id: 1, song: 'Blinding Lights', artist: 'The Weeknd', status: 'played', time: '20:15' },
    { id: 2, song: 'Levitating', artist: 'Dua Lipa', status: 'accepted', time: '20:20' },
    { id: 3, song: 'Stay', artist: 'The Kid LAROI & Justin Bieber', status: 'pending', time: '20:25' },
    { id: 4, song: 'Heat Waves', artist: 'Glass Animals', status: 'pending', time: '20:28' },
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'lizenko2024') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleDeleteMessage = (id) => {
    setChatMessages(chatMessages.filter(msg => msg.id !== id));
  };

  const handleUpdateRequestStatus = (id, newStatus) => {
    setSongRequests(songRequests.map(req =>
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  const handleDeleteRequest = (id) => {
    setSongRequests(songRequests.filter(req => req.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full p-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white text-center mb-2">{t('adminTitle')}</h2>
          <p className="text-gray-400 text-center mb-6">Enter admin password to access</p>
          
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
            >
              Login
            </button>
          </form>
          
          <p className="text-gray-500 text-xs text-center mt-4">
            Demo password: lizenko2024
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full p-3">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">{t('adminTitle')}</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === 'chat'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            {t('manageChat')}
          </button>
          
          <button
            onClick={() => setActiveTab('requests')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === 'requests'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <ListMusic className="w-5 h-5" />
            {t('manageRequests')}
          </button>
        </div>

        {/* Chat Management */}
        {activeTab === 'chat' && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-6">{t('manageChat')}</h2>
            
            <div className="space-y-3">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-white font-semibold">{message.user}</span>
                      <span className="text-gray-500 text-sm">{message.time}</span>
                    </div>
                    <p className="text-gray-300">{message.text}</p>
                  </div>
                  
                  <button
                    onClick={() => handleDeleteMessage(message.id)}
                    className="ml-4 bg-red-500/20 text-red-400 p-2 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {chatMessages.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No chat messages to manage</p>
              </div>
            )}
          </div>
        )}

        {/* Song Requests Management */}
        {activeTab === 'requests' && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-6">{t('manageRequests')}</h2>
            
            <div className="space-y-3">
              {songRequests.map((request) => (
                <div
                  key={request.id}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-white font-semibold">{request.song}</h4>
                        <span className="text-gray-400">by {request.artist}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{request.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                        request.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                        request.status === 'accepted' ? 'bg-green-500/20 text-green-300' :
                        request.status === 'played' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {t(`requestStatus.${request.status}`)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {request.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleUpdateRequestStatus(request.id, 'accepted')}
                          className="flex-1 bg-green-500/20 text-green-400 px-4 py-2 rounded-lg hover:bg-green-500/30 transition-colors flex items-center justify-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          {t('accept')}
                        </button>
                        <button
                          onClick={() => handleUpdateRequestStatus(request.id, 'rejected')}
                          className="flex-1 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2"
                        >
                          <X className="w-4 h-4" />
                          {t('reject')}
                        </button>
                      </>
                    )}
                    
                    {request.status === 'accepted' && (
                      <button
                        onClick={() => handleUpdateRequestStatus(request.id, 'played')}
                        className="flex-1 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        {t('play')}
                      </button>
                    )}
                    
                    <button
                      onClick={() => handleDeleteRequest(request.id)}
                      className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      {t('delete')}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {songRequests.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <ListMusic className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No song requests to manage</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
