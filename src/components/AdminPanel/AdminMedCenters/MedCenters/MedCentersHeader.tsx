import React from 'react';
import { ROUTS } from '@constants/routs';
import Input from '@components/common/Input/Input';
import {
  CreateNewOrEditLink,
  MedCentersHeaderSearch,
  MedCentersHeaderWrapper,
} from './MedCentersStyle';

interface IMedCentersHeaderProps {
  setSearchValue: (value: string) => void;
}
const MedCentersHeader: React.FC<IMedCentersHeaderProps> = ({ setSearchValue }) => {
  return (
    <MedCentersHeaderWrapper>
      <MedCentersHeaderSearch>
        <Input
          label="Найти медцентр"
          primary
          name="Search MedCenter"
          placeholder="Введите название"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(event.target.value)
          }
        />
      </MedCentersHeaderSearch>
      <CreateNewOrEditLink to={ROUTS.ADMIN_PANEL_MED_CENTERS_CREATE_NEW}>
        Добавить
      </CreateNewOrEditLink>
    </MedCentersHeaderWrapper>
  );
};

export default MedCentersHeader;
