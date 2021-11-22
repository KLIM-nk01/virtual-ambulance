import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';
import {
  Card,
  ContainerTwo,
  ContainerOne,
  NameSurname,
  Experience,
  DoctorsDirection,
  Description,
} from './DoctorsCardStyle';
import Button from '@components/common/Button/Button';
import Modal from '@components/common/Modal/Modal';
import Portal from '@components/common/Portal/Portal';
import Schedule from './Schedule/Schedule';

interface IProps {
  experience: string;
  direction: string;
  description: string;

  workTime: { date: string; time: string; _id: string, patientData: string }[];
  userData: {
    name: string;
    lastName: string;
    photo: string;
  };
  workPlace: {
    name: string;
    address: string;
  };
}

const DoctorsCard: React.FC<IProps> = ({
  userData,
  direction,
  experience,
  description,
  workTime,
  workPlace,
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
        <img src={userData.photo} alt="photo" />
        <DoctorsDirection>{direction}</DoctorsDirection>
      </ContainerOne>

      <ContainerTwo>
        <NameSurname>
          {userData.name} {userData.lastName}
        </NameSurname>

        <Experience>Experience: {experience}</Experience>
        <Experience>
          Work Place: {workPlace.name} Address: {workPlace.address}
        </Experience>
        <Description>{description}</Description>
        <Button round onClick={showSchedule} variant="contained">
          Sign up
        </Button>
      </ContainerTwo>

      <Portal>
        <Modal active={modalActive} setActive={setModalActive}>
          <Schedule workTimeData={workTime} />
        </Modal>
      </Portal>
    </Card>
  );
};

export default DoctorsCard;
