import React from 'react';
import DoctorsFeature from './DoctorsFeature/DoctorsFeature';
import { Container } from './FeatureContainerStyle';
import UserVisit from './UserVisits/UserVisit';

const FeatureContainer = () => {
  return (
    <Container>
      <UserVisit />
      {/* <DoctorsFeature /> */}
    </Container>
  );
};

export default FeatureContainer;
