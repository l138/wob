import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "WALLSOFBRAZIL",
  description: "Hardcore Punk from Brazil.",
  //avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
  //avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
  avatar: "./public/avatar.jpg",
  links: [
    {
      id: "1",
      title: "Instagram", 
      url: "https://instagram.com",
      icon: "instagram",
      external: true
    },
    {
      id: "2",
      title: "Bluesky",
      url: "https://bluesky.com", 
      icon: "bluesky",
      external: true
    },
    {
      id: "3",
      title: "YouTube",
      url: "https://youtube.com",
      icon: "youtube",
      external: true
    },
    {
      id: "4",
      title: "Contact",
      url: "mailto:contact@wallsofbrazil.com",
      icon: "mail",
      external: false
    },
    {
      id: "5",
      title: "Blog",
      url: "https://blog.wallsofbrazil.com",
      icon: "globe",
      external: true
    }
  ]
};