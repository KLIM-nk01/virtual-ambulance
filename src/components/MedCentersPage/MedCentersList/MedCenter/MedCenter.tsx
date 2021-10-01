import React from 'react';
import {
  MedCenterItem,
  ItemHeader,
  ItemPhoto,
  ItemDescription,
  ItemButtons,
  Title,
  SubTitle,
} from './MedCenterStyle';
import Button from '@components/common/Button/Button';
import { NavLink } from 'react-router-dom';

const MedCenter: React.FC = () => {
  return (
    <MedCenterItem>
      <ItemHeader>
        <NavLink to="#">
          <Title>LODE</Title>
        </NavLink>
        <NavLink to="#">
          <SubTitle>Minsk, Independence, 58A</SubTitle>
        </NavLink>
      </ItemHeader>

      <ItemPhoto>
        <img
          src="https://p1.zoon.ru/preview/AP4f0L1EIuknqc7Lx9JVdw/625x440x85/0/5/a/51cd2a06a0f302050f000013_53bf655292cca.jpg"
          alt="Center Photo"
        />
      </ItemPhoto>
      <ItemDescription>
        <p>
          The multidisciplinary medical company "LODE" has been operating since 1992. For almost 30
          years of activity, the centers have received many awards in their industry and, most
          importantly, popular confidence and recognition.
        </p>
      </ItemDescription>

      <ItemButtons>
        <Button variant={'contained'}>More</Button>
      </ItemButtons>
    </MedCenterItem>
  );
};

export default MedCenter;
