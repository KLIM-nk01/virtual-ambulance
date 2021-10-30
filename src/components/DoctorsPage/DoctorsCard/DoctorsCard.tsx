import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  Card,
  ContainerTwo,
  ContainerOne,
  NameSurname,
  Expiriens,
  DoctorsDirection,
  Description,
} from './DoctorsCardStyle';
import Button from '@components/common/Button/Button';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import Modal from '@components/common/Modal/Modal';
import Portal from '@components/common/Portal/Portal';
import Shedule from './Schedule/Shedule';

interface IProps {
  direction: string;
  name: string;
  lastName: string;
  expiriens: string;
  description: string;
  photo: string;
  workTime: { date: string; time: string }[];
}

const DoctorsCard: React.FC<IProps> = ({
  direction,
  name,
  lastName,
  expiriens,
  description,
  photo,
  workTime,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const state = useTypesSelector((state) => state.user);
  const history = useHistory();

  const showSchedule = (): void => {
    setModalActive(true);
    if (!state.isAuth) history.push(ROUTS.SIGNIN_FORM);
  };
  return (
    <Card>
      <ContainerOne>
        <img src={photo} alt="foto" />
        <DoctorsDirection>{direction}</DoctorsDirection>
      </ContainerOne>

      <ContainerTwo>
        <NameSurname>
          {name} {lastName}
        </NameSurname>

        <Expiriens>Expiriens: {expiriens}</Expiriens>

        <Description>{description}</Description>
        <Button round onClick={() => showSchedule()} variant="contained">
          Sign up
        </Button>
      </ContainerTwo>

      <Portal>
        <Modal active={modalActive} setActive={setModalActive}>
          <Shedule workTimeData={workTime} />
        </Modal>
      </Portal>
    </Card>
  );
};

export default DoctorsCard;
