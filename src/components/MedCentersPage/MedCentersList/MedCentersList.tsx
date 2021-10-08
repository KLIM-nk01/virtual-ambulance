import React from 'react';
import { MedCentersListWrapper } from './MedCentersListStyle';
import MedCenter from './MedCenter/MedCenter';

import { medCenterData } from '@data/medCenterData';

const MedCentersList: React.FC = () => {
  return (
    <MedCentersListWrapper>
      {medCenterData.map((medCenter) => {
        return <MedCenter {...medCenter} />;
      })}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
