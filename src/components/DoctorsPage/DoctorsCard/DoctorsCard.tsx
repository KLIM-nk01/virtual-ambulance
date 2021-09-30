import React from 'react';
import {
  Card,
  ContainerTwo,
  ContainerOne,
  NameSurname,
  Expiriens,
  DoctorsDirection,
  DegreeScience,
  Description
} from './DoctorsCardStyle';
import Button from '@components/common/Button/Button';
import Olga from '@assets/Olga.jpg';

interface IProps {
  setActive: (value: boolean) => void;
}

const DoctorsCard: React.FC<IProps> = ({ setActive }) => {
  return (
    <Card>
      <ContainerOne>
        <img src={Olga} alt="foto" />
        <DoctorsDirection>Allergolog</DoctorsDirection>
        <DegreeScience>Professor</DegreeScience>
        <Button onClick={() => setActive(true)} variant={'contained'}>
          Sign up
        </Button>
      </ContainerOne>

      <ContainerTwo>
        <NameSurname>Moiseichuk Olga Valerievna</NameSurname>
        <Expiriens>Expiriens: 27 years</Expiriens>
        <Description>
          Olga Valerievna is a specialist in correcting speech defects in
          children. Olga Valerievna is a specialist in correcting speech defects
          in children.s
        </Description>
      </ContainerTwo>
    </Card>
  );
};

export default DoctorsCard;
