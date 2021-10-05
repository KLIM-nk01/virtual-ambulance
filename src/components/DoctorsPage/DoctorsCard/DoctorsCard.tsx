import React from 'react';
import {
  Card,
  ContainerTwo,
  ContainerOne,
  NameSurname,
  Expiriens,
  DoctorsDirection,
  DegreeScience,
  Description,
} from './DoctorsCardStyle';
import Button from '@components/common/Button/Button';
import NoAva from '@assets/NoAvatar.png';

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
  photo,
}) => {
  // const photo = photo;
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
        <Button onClick={() => setActive(true)} variant="contained">
          Sign up
        </Button>
      </ContainerTwo>
    </Card>
  );
};

export default DoctorsCard;
