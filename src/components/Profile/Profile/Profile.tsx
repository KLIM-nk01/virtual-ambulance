import { useTypesSelector } from '@hooks/UseTypedSelector';
import React, { useEffect } from 'react';
import AboutContainer from './AboutContainer/AboutContainer';
import FeatureContainer from './FeatureContainer/FeatureContainer';
import PhotoContainer from './PhotoContainer/PhotoContainer';
import { ProfileWrapper, ProfileInformation, ProfileFeature } from './ProfileStyle';

const Profile: React.FC = () => {
  return (
    <ProfileWrapper>
      <ProfileInformation>
        <PhotoContainer />
        <AboutContainer  />
      </ProfileInformation>
      <ProfileFeature>
        <FeatureContainer />
      </ProfileFeature>
    </ProfileWrapper>
  );
};

export default Profile;
