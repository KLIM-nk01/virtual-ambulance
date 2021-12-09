import React from 'react';
import { useDispatch } from 'react-redux';
import { medCenterDelete } from '@store/actionCreators/medCenters';
import Button from '@components/common/Button/Button';
import { ButtonBar, DeleteMedCenterPopupWrapper } from './DeleteMedCenterPopupStyle';

interface IDeletePopupProps {
  idMedCenter: string;
  setModalActive: (value: boolean) => void;
}

const DeleteMedCenterPopup: React.FC<IDeletePopupProps> = ({ idMedCenter, setModalActive }) => {
  const dispatch = useDispatch();

  const deleteMedCenter = () => {
    dispatch(medCenterDelete(idMedCenter));
    setModalActive(false);
  };

  return (
    <DeleteMedCenterPopupWrapper>
      <span>Are you sure you want to delete the medical center?</span>
      <ButtonBar>
        <Button onClick={deleteMedCenter} round variant="outlined">
          yes
        </Button>
        <Button onClick={() => setModalActive(false)} round variant="outlined">
          no
        </Button>
      </ButtonBar>
    </DeleteMedCenterPopupWrapper>
  );
};

export default DeleteMedCenterPopup;
