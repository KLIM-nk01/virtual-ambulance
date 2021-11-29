import React from 'react';
import Input from '@components/common/Input/Input';
import {
  CreateNewOrEditLink,
  MedCentersHeaderSearch,
  MedCentersHeaderWrapper,
} from './MedCentersStyle';
import { ROUTS } from '@constants/routs';

interface IMedCentersHeaderProps {
  setSearchValue: (value: string) => void;
}
const MedCentersHeader: React.FC<IMedCentersHeaderProps> = ({ setSearchValue }) => {
  return (
    <MedCentersHeaderWrapper>
      <MedCentersHeaderSearch>
        <Input
          label="Search MedCenter"
          primary
          name="Search MedCenter"
          placeholder="Enter name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(event.target.value)
          }
        />
      </MedCentersHeaderSearch>
      <CreateNewOrEditLink to={ROUTS.ADMIN_PANEL_MED_CENTERS_EDIT}>Create new+</CreateNewOrEditLink>
    </MedCentersHeaderWrapper>
  );
};

export default MedCentersHeader;
