export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  external?: boolean;
}

export interface ProfileData {
  name: string;
  description: string;
  avatar: string;
  links: LinkItem[];
}

export interface NotificationState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}