import React from 'react';
import { MedCentersListWrapper } from './MedCentersListStyle';
import MedCenter from './MedCenter/MedCenter';

const MedCentersList: React.FC = () => {
  return (
    <MedCentersListWrapper>
      <MedCenter />
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
