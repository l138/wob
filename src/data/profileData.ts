import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "WALLSOFBRAZIL",
  description: "Hardcore Punk from Brazil.",
  avatar: "/public/avatar.jpg",
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