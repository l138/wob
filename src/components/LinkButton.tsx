import React from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Globe,
  ExternalLink
} from 'lucide-react';
import { LinkItem } from '../types';

interface LinkButtonProps {
  link: LinkItem;
  onClick: (title: string, url: string) => void;
  index: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, onClick, index }) => {
  const getIcon = (iconName: string) => {
    const iconMap = {
      github: Github,
      linkedin: Linkedin,
      instagram: Instagram,
      twitter: Twitter,
      youtube: Youtube,
      mail: Mail,
      globe: Globe,
    };
    
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Globe;
    return <IconComponent className="w-5 h-5" />;
  };

  const handleClick = (e: React.MouseEvent) => {
    onClick(link.title, link.url);
    
    // Visual feedback
    const button = e.currentTarget as HTMLElement;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = '';
    }, 150);
  };

  return (
    <a
      href={link.url}
      className="link-button"
      onClick={handleClick}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
    >
      <div className="link-icon">
        {getIcon(link.icon)}
      </div>
      <span>{link.title}</span>
      {link.external && <ExternalLink className="w-4 h-4 ml-auto opacity-60" />}
    </a>
  );
};

export default LinkButton;