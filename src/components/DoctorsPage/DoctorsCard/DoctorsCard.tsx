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

const DoctorsCard: React.FC = () => {
  return (
    <Card>
      <ContainerOne>
        <img src={Olga} alt="foto" />
        <DoctorsDirection>Allergolog</DoctorsDirection>
        <DegreeScience>Professor</DegreeScience>
        <Button primary>Sign up</Button>
      </ContainerOne>

      <ContainerTwo>
        <NameSurname>Moiseichuk Olga Valerievna</NameSurname>
        <Expiriens>Expiriens: 27 years</Expiriens>
        <Description>
          Olga Valerievna is a specialist in correcting speech defects in
          children.
        </Description>
      </ContainerTwo>
    </Card>
  );
};

export default DoctorsCard;
