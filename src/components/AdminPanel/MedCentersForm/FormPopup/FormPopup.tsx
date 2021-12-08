import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { ROUTS } from '@constants/routs';
import { EditPopupWrapper, PopupContent } from './FormPopupStyle';

interface IFormPopupProps {
  message?: string;
  error?: string;
}

const FormPopup: React.FC<IFormPopupProps> = ({ message }) => {
  return (
    <EditPopupWrapper>
      <PopupContent>
        <span>{message}</span>
        <NavLink to={ROUTS.ADMIN_PANEL_MED_CENTERS_LIST}>
          You will be redirected to the page of views of medical centers automatically, through{' '}
        </NavLink>
      </PopupContent>
    </EditPopupWrapper>
  );
};

export default FormPopup;
