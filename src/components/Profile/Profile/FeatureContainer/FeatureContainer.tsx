import React from 'react';
import DoctorsFeature from './DoctorsFeature/DoctorsFeature';
import { FeatureContainerWrapper } from './FeatureContainerStyle';
import UserVisit from './UserVisits/UserVisit';
import * as cookies from '@core/cookies/cookies';

const FeatureContainer = () => {
  const userRole = cookies.getCookie('userRole');
  console.log(userRole);
  return (
    <FeatureContainerWrapper>
      {userRole === 'patient' ? <UserVisit /> : <DoctorsFeature />}
    </FeatureContainerWrapper>
  );
};

export default FeatureContainer;
