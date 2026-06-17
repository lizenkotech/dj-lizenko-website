import { useState } from 'react';
import './i18n';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import LiveChat from './components/LiveChat';
import SongRequests from './components/SongRequests';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'chat':
        return <LiveChat />;
      case 'requests':
        return <SongRequests />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
