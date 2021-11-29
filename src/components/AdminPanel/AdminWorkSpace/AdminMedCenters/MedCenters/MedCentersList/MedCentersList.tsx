import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@components/common/Button/Button';
import MedCenter from '@components/MedCentersPage/MedCentersList/MedCenter/MedCenter';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchMedCenters } from '@store/actionCreators/medCenters';
import { MedCentersListWrapper, CenterWrapper } from './MedCentersListStyle';
import { CreateNewOrEditLink } from '../MedCentersStyle';
import { ROUTS } from '@constants/routs';
import Error from '@components/common/Error/Error';

interface IMedCentersListProps {
  searchValue: string;
}

const MedCentersList: React.FC<IMedCentersListProps> = ({ searchValue }) => {
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
              <CreateNewOrEditLink to={ROUTS.ADMIN_PANEL_MED_CENTERS_EDIT}>
                <Button round variant="outlined">
                  Edit
                </Button>
              </CreateNewOrEditLink>
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
