import React from 'react';
import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  onShare: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ onShare }) => {
  return (
    <button
      onClick={onShare}
      className="link-button share-button"
      aria-label="Share this page"
    >
      <div className="link-icon">
        <Share2 className="w-5 h-5" />
      </div>
      <span>Share</span>
    </button>
  );
};

export default ShareButton;