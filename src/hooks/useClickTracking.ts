import { useCallback } from 'react';

export const useClickTracking = () => {
  const trackClick = useCallback((linkName: string, url: string) => {
    // Analytics tracking
    console.log(`Link clicked: ${linkName} -> ${url}`);
    
    // Here you can add integrations with:
    // - Google Analytics
    // - Mixpanel
    // - Custom analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Link',
        event_label: linkName,
        value: url
      });
    }
  }, []);

  return { trackClick };
};