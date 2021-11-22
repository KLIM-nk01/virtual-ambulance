import React from 'react';
import * as cookies from '@core/cookies/cookies';
import DoctorsFeature from './DoctorsFeature/DoctorsFeature';
import { FeatureContainerWrapper } from './FeatureContainerStyle';
import UserVisit from './UserVisits/UserVisit';

const FeatureContainer = () => {
  const userRole = cookies.getCookie('userRole');
  return (
    <FeatureContainerWrapper>
      {userRole === 'patient' ? <UserVisit /> : <DoctorsFeature />}
    </FeatureContainerWrapper>
  );
};

export default FeatureContainer;
