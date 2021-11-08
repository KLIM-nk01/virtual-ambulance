import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MedCenterItem,
  ItemHeader,
  ItemPhoto,
  ItemDescription,
  Title,
  SubTitle,
  ItemMore,
} from './MedCenterStyle';
import Services from './CenterServices.tsx/Services';
import Staff from './CenterStaff/CenterStaff';

interface IMedCenter {
  name: string;
  address: string;
  photo: string;
  description: string;
  services: string[];
  medStaff: any;
}

const MedCenter: React.FC<IMedCenter> = ({
  name,
  address,
  photo,
  description,
  services,
  medStaff,
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
          }}
        >
          more...
        </span>
      </ItemDescription>

      <ItemMore hidden={hidden}>
        <Services services={services} />
        <Staff medStaff={medStaff} />
      </ItemMore>
    </MedCenterItem>
  );
};

export default MedCenter;
