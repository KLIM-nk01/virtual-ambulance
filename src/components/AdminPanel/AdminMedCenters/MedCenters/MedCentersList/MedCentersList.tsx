import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@components/common/Button/Button';
import MedCenter from '@components/MedCentersPage/MedCentersList/MedCenter/MedCenter';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { fetchMedCenters, medCenterDelete } from '@store/actionCreators/medCenters';
import { MedCentersListWrapper, CenterWrapper } from './MedCentersListStyle';
import { ROUTS } from '@constants/routs';
import { IEditForm } from '../../AdminMedCenters';
import { NavLink, useLocation } from 'react-router-dom';

interface IMedCentersListProps {
  searchValue: string;
  setEditFormData: (value: IEditForm) => void;
}

const MedCentersList: React.FC<IMedCentersListProps> = ({ searchValue, setEditFormData }) => {
  const dispatch = useDispatch();
  const { medCenters, error } = useTypesSelector((state) => state.medCenter);

  const deleteMedCenter = (idMedCenter: string) => {
    dispatch(medCenterDelete(idMedCenter));
  };
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
              <NavLink to={`/editMedCenter/${medCenter._id}`}>
                <Button round variant="outlined">
                  Edit
                </Button>
              </NavLink>

              <Button onClick={() => deleteMedCenter(medCenter._id)} round variant="outlined">
                Delete
              </Button>
            </div>
          </CenterWrapper>
        ))}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
