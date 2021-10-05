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

interface IMedCenter {
  name: string;
  address: string;
  photo: any;
  description: string;
}

const MedCenter: React.FC<IMedCenter> = ({ name, address, photo, description }) => {
  return (
    <MedCenterItem>
      <ItemHeader>
        <NavLink to="#">
          <Title>{name}</Title>
        </NavLink>
        <NavLink to="#">
          <SubTitle>{address}</SubTitle>
        </NavLink>
      </ItemHeader>

      <ItemPhoto>
        <img src={photo} alt="Center Photo" />
      </ItemPhoto>
      <ItemDescription>
        <p>{description}</p>
      </ItemDescription>

      <ItemButtons>
        <Button variant={'contained'}>More</Button>
      </ItemButtons>
    </MedCenterItem>
  );
};

export default MedCenter;
