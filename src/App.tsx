//import React from 'react';
import ProfileSection from './components/ProfileSection';
import LinkButton from './components/LinkButton';
import ShareButton from './components/ShareButton';
import ThemeToggle from './components/ThemeToggle';
import Notification from './components/Notification';
import { profileData } from './data/profileData';
import { useNotification } from './hooks/useNotification';
import { useClickTracking } from './hooks/useClickTracking';
import { useTheme } from './hooks/useTheme';
import './styles/main.css';

function App() {
  const { notification, showNotification, hideNotification } = useNotification();
  const { trackClick } = useClickTracking();
  const { isDark, toggleTheme } = useTheme();

  const handleLinkClick = (title: string, url: string) => {
    trackClick(title, url);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${profileData.name} - Links`,
          text: profileData.description,
          url: window.location.href
        });
        showNotification('Shared successfully!', 'success');
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        showNotification('Link copied to clipboard!', 'success');
      }
    } catch (error) {
      showNotification('Failed to share', 'error');
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>

        <ProfileSection profile={profileData} />

        <div className="links-section">
          {profileData.links.map((link, index) => (
            <LinkButton
              key={link.id}
              link={link}
              onClick={handleLinkClick}
              index={index}
            />
          ))}
          <ShareButton onShare={handleShare} />
        </div>

        <footer className="footer">
          <p>&copy; 2025 {profileData.name}</p>
        </footer>
      </div>

      <Notification 
        notification={notification} 
        onClose={hideNotification} 
      />
    </div>
  );
}

export default App;