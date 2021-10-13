import React from 'react';
import { useHistory } from 'react-router';
import {
  Card,
  ContainerTwo,
  ContainerOne,
  NameSurname,
  Expiriens,
  DoctorsDirection,
  Description
} from './DoctorsCardStyle';
import Button from '@components/common/Button/Button';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { ROUTS } from '@constants/routs';

interface IProps {
  setActive: (value: boolean) => void;
  direction: string;
  name: string;
  lastName: string;
  expiriens: string;
  description: string;
  photo: string;
}

const DoctorsCard: React.FC<IProps> = ({
  setActive,
  direction,
  name,
  lastName,
  expiriens,
  description,
  photo
}) => {
  // const photo = photo;
  const state = useTypesSelector((state) => state.auth);
  const history = useHistory();

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
        <Button
          round
          onClick={() => {
            setActive(true);
            if (!state.authedUser) history.push(ROUTS.SIGNIN_FORM);
          }}
          variant="contained">
          Sign up
        </Button>
      </ContainerTwo>
    </Card>
  );
};

export default DoctorsCard;
