import { useState, useCallback } from 'react';
import { NotificationState } from '../types';

export const useNotification = () => {
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    message: '',
    type: 'info'
  });

  const showNotification = useCallback((message: string, type: NotificationState['type'] = 'info') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  }, []);

  const hideNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, show: false }));
  }, []);

  return { notification, showNotification, hideNotification };
};