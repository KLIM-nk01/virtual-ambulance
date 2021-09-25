import React from 'react';
import { MedCentersListWrapper } from './MedCentersListStyle';
import MedCenter from './MedCenter/MedCenter';
// import { Input } from '@components/common/Input/InputStyle';

const MedCentersList: React.FC = () => {
  return (
    <MedCentersListWrapper>
      {/* <Input /> */}
      <MedCenter />
      <MedCenter />
      <MedCenter />
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
