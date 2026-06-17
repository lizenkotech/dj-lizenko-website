import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, MessageCircle, Users } from 'lucide-react';

const LiveChat = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    { id: 1, user: 'DJ Lizenko', text: 'Welcome to the live chat! 🎵', time: '20:00', isDj: true },
    { id: 2, user: 'MusicFan123', text: 'Love the beats tonight!', time: '20:05', isDj: false },
    { id: 3, user: 'PartyGoer', text: 'Can you play some techno?', time: '20:07', isDj: false },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const now = new Date();
      const time = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
      
      setMessages([...messages, {
        id: messages.length + 1,
        user: 'You',
        text: newMessage,
        time,
        isDj: false
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full p-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{t('liveChatTitle')}</h2>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`} />
                    <span className="text-purple-300 text-sm">
                      {isOnline ? t('online') : t('offline')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-purple-300" />
                <span className="text-white text-sm font-semibold">247</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isDj ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs sm:max-w-md px-4 py-3 rounded-2xl ${
                    message.isDj
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">
                      {message.user}
                    </span>
                    {message.isDj && (
                      <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                        DJ
                      </span>
                    )}
                    <span className="text-xs opacity-70 ml-auto">{message.time}</span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="p-6 border-t border-white/10">
            <div className="flex gap-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={t('sendMessage')}
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">{t('sendMessage')}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Chat Rules */}
        <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <h3 className="text-white font-semibold mb-2">Chat Rules</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Be respectful to everyone</li>
            <li>• No spam or excessive caps</li>
            <li>• Keep requests in the Song Requests section</li>
            <li>• Have fun and enjoy the music! 🎵</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
