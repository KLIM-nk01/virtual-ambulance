import React from 'react';
import { MedCentersPageWrapper } from './MedcentersPageStyle';
import MedCentersList from './MedCentersList/MedCentersList';
import MedCentersMap from './MedCentersMap/MedCentersMap';

const MedCentersPage: React.FC = () => {
  return (
    <MedCentersPageWrapper>
      <MedCentersList></MedCentersList>
      <MedCentersMap></MedCentersMap>
    </MedCentersPageWrapper>
  );
};

export default MedCentersPage;
