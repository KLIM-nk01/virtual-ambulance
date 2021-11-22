import React, { useEffect } from 'react';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ProfileWrapper, ProfileInformation, ProfileFeature } from './ProfileStyle';
import AboutContainer from './AboutContainer/AboutContainer';
import FeatureContainer from './FeatureContainer/FeatureContainer';
import PhotoContainer from './PhotoContainer/PhotoContainer';

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
