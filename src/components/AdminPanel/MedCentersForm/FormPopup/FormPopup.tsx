import React, { useEffect, useState } from 'react';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { EditPopupWrapper, PopupContent } from './FormPopupStyle';
import Error from '@components/common/Error/Error';
import { NavLink, useHistory } from 'react-router-dom';
import { ROUTS } from '@constants/routs';

interface IFormPopupProps {
  message: string;
}

const FormPopup: React.FC<IFormPopupProps> = ({ message }) => {
  const { error } = useTypesSelector((state) => state.medCenter);
  const history = useHistory();
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    seconds > 0
      ? setTimeout(() => setSeconds(seconds - 1), 1000)
      : history.push(ROUTS.ADMIN_PANEL_MED_CENTERS_LIST);
  });
  return (
    <EditPopupWrapper>
      {error ? (
        <Error errorMessage={error} />
      ) : (
        <PopupContent>
          <span>{message}</span>
          <NavLink to={ROUTS.ADMIN_PANEL_MED_CENTERS_LIST}>
            You will be redirected to the page of views of medical centers automatically, through{' '}
            {seconds}
          </NavLink>
        </PopupContent>
      )}
    </EditPopupWrapper>
  );
};

export default FormPopup;
