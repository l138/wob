import React from 'react';
import { NotificationState } from '../types';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface NotificationProps {
  notification: NotificationState;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ notification, onClose }) => {
  if (!notification.show) return null;

  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'error':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getColorClass = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className={`notification ${getColorClass()}`}>
      <div className="flex items-center gap-2">
        {getIcon()}
        <span>{notification.message}</span>
      </div>
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-70 transition-opacity"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Notification;