import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MedCenterItem,
  ItemHeader,
  ItemPhoto,
  ItemDescription,
  Title,
  SubTitle,
  ItemMore
} from './MedCenterStyle';
import Services from './CenterServices.tsx/Services';
import Staff from './CenterStaff/CenterStaff';

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
  const [hidden, setHidden] = useState<boolean>(true);
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
        <span
          hidden={hidden}
          onClick={() => {
            hidden ? setHidden(false) : setHidden(true);
          }}>
          more...
        </span>
      </ItemDescription>

      {/* <ItemButtons>
        <Button variant={'contained'}>More</Button>
      </ItemButtons> */}
      <ItemMore hidden={hidden}>
        <Services services={services} />
        <Staff services={services} />
      </ItemMore>
    </MedCenterItem>
  );
};

export default MedCenter;
