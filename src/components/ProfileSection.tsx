import React from 'react';
import { ProfileData } from '../types';

interface ProfileSectionProps {
  profile: ProfileData;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ profile }) => {
  return (
    <div className="profile-section">
      <div className="profile-image">
        <img
          src={profile.avatar}
          alt={`${profile.name} profile`}
          className="profile-img"
          loading="lazy"
        />
      </div>
      <h1 className="profile-name">{profile.name}</h1>
      <p className="profile-description">{profile.description}</p>
    </div>
  );
};

export default ProfileSection;