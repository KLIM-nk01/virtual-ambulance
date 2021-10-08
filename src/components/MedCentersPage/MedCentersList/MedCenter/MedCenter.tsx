import React, { useState } from 'react';
import {
  MedCenterItem,
  ItemHeader,
  ItemPhoto,
  ItemDescription,
  Title,
  SubTitle,
  ItemMore,
  CenterSraff
} from './MedCenterStyle';
import { NavLink } from 'react-router-dom';
import Services from './CenterServices/Services';

interface IMedCenter {
  name: string;
  address: string;
  photo: any;
  description: string;
  services: string[];
}

const MedCenter: React.FC<IMedCenter> = ({
  name,
  address,
  photo,
  description,
  services
}) => {
  const [expaned, setExpaned] = useState<boolean>(false);
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
        <span>more...</span>
      </ItemDescription>

      {/* <ItemButtons>
        <Button variant={'contained'}>More</Button>
      </ItemButtons> */}
      <ItemMore>
        <Services services={services} />
        <CenterSraff></CenterSraff>
      </ItemMore>
    </MedCenterItem>
  );
};

export default MedCenter;
