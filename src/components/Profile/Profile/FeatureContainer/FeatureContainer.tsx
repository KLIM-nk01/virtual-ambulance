import React from 'react';
import DoctorsFeature from './DoctorsFeature/DoctorsFeature';
import { Container } from './FeatureContainerStyle';

const FeatureContainer = () => {
  return (
    <Container>
      {/* <UserVisit /> */}
      <DoctorsFeature />
    </Container>
  );
};

export default FeatureContainer;
