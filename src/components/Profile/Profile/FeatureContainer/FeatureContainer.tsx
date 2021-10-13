import React from 'react';
import DoctorsFeature from './DoctorsFeature/DoctorsFeature';
import { FeatureContainerWrapper } from './FeatureContainerStyle';
import UserVisit from './UserVisits/UserVisit';

const FeatureContainer = () => {
  return (
    <FeatureContainerWrapper>
      <UserVisit />
      <DoctorsFeature />
    </FeatureContainerWrapper>
  );
};

export default FeatureContainer;
