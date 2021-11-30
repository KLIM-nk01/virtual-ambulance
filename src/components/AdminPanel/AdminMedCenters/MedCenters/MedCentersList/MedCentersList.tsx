import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@components/common/Button/Button';
import MedCenter from '@components/MedCentersPage/MedCentersList/MedCenter/MedCenter';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchMedCenters } from '@store/actionCreators/medCenters';
import { MedCentersListWrapper, CenterWrapper } from './MedCentersListStyle';
import { CreateNewOrEditLink } from '../MedCentersStyle';
import { ROUTS } from '@constants/routs';
import { IMedCenterData } from '@store/types/medCentersType';
import { IEditForm } from '../../AdminMedCenters';

interface IMedCentersListProps {
  searchValue: string;
  setEditFormData: (value: IEditForm) => void;
}

const MedCentersList: React.FC<IMedCentersListProps> = ({ searchValue, setEditFormData }) => {
  const dispatch = useDispatch();
  const { medCenters, error } = useTypesSelector((state) => state.medCenter);

  useEffect(() => {
    dispatch(fetchMedCenters());
  }, []);

  return (
    <MedCentersListWrapper>
      {medCenters
        .filter((medCenter) => medCenter.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((medCenter) => (
          <CenterWrapper>
            <MedCenter key={medCenter._id} adminPanel {...medCenter} />
            <div>
              <Button
                onClick={() => {
                  setEditFormData({ disabled: false, medCenterData: medCenter }); 
                }}
                round
                variant="outlined"
              >
                Edit
              </Button>

              <Button round variant="outlined">
                Delete
              </Button>
            </div>
          </CenterWrapper>
        ))}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
