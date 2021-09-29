import React from 'react';
import { MedCentersListWrapper } from './MedCentersListStyle';
import MedCenter from './MedCenter/MedCenter';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
// import { Input } from '@components/common/Input/InputStyle';

const MedCentersList: React.FC = () => {
  return (
    <MedCentersListWrapper>
      {/* <Input /> */}
      <NavLink to={ROUTS.MEDCENTERS_PAGE_PATH}>
        <MedCenter />
      </NavLink>
      <NavLink to={ROUTS.MEDCENTERS_PAGE_PATH}>
        <MedCenter />
      </NavLink>
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
