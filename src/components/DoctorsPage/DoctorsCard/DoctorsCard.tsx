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
  experience: string;
  direction: string;
  description: string;

  workTime: { date: string; time: string }[];
  userData: {
    name: string;
    lastName: string;
    photo: string;
  };
}

const DoctorsCard: React.FC<IProps> = (props) => {
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
        <img src={props.userData.photo} alt="foto" />
        <DoctorsDirection>{props.direction}</DoctorsDirection>
      </ContainerOne>

      <ContainerTwo>
        <NameSurname>
          {props.userData.name} {props.userData.lastName}
        </NameSurname>

        <Expiriens>Expiriens: {props.experience}</Expiriens>

        <Description>{props.description}</Description>
        <Button round onClick={() => showSchedule()} variant="contained">
          Sign up
        </Button>
      </ContainerTwo>

      <Portal>
        <Modal active={modalActive} setActive={setModalActive}>
          <Shedule workTimeData={props.workTime} />
        </Modal>
      </Portal>
    </Card>
  );
};

export default DoctorsCard;
