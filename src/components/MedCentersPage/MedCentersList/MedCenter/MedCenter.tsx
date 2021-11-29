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
import { IMedStaff } from '../MedCentersList';

interface IMedCenter {
  name: string;
  address: string;
  photo: string;
  description: string;
  services: string[];
  medStaff: IMedStaff[];
  adminPanel?: boolean;
}

const MedCenter: React.FC<IMedCenter> = ({
  name,
  address,
  photo,
  description,
  services,
  medStaff,
  adminPanel,
}) => {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <MedCenterItem adminPanel={adminPanel}>
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

        {!adminPanel && (
          <span
            hidden={hidden}
            onClick={() => {
              hidden ? setHidden(false) : setHidden(true);
            }}
          >
            more...
          </span>
        )}
      </ItemDescription>

      <ItemMore adminPanel={adminPanel} hidden={hidden}>
        <Services adminPanel={adminPanel} services={services} />
        <Staff medStaff={medStaff} />
      </ItemMore>
    </MedCenterItem>
  );
};

export default MedCenter;
