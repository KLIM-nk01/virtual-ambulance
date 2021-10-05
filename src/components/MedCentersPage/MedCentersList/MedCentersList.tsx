import React from 'react';
import { MedCentersListWrapper } from './MedCentersListStyle';
import MedCenter from './MedCenter/MedCenter';
import { NavLink } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import { medCenterData } from '@data/medCenterData';
// import { Input } from '@components/common/Input/InputStyle';

const MedCentersList: React.FC = () => {
  return (
    <MedCentersListWrapper>
      {medCenterData.map((medCenter) => {
        return (
          <NavLink to={ROUTS.MEDCENTERS_PAGE_PATH}>
            <MedCenter {...medCenter} />
          </NavLink>
        );
      })}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
