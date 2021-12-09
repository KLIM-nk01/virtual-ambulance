import React from 'react';
import { CenterServices, ServiceItem, ServicesWrapper } from './ServicesStyle';

interface IServices {
  services: string[];
  adminPanel?: boolean;
  medCenterName: string;
}

const Services: React.FC<IServices> = ({ services, adminPanel, medCenterName }) => {
  return (
    <CenterServices>
      <span>Our services: </span>
      <ServicesWrapper adminPanel={adminPanel}>
        {services?.map((service) => (
          <ServiceItem adminPanel={adminPanel} key={service + medCenterName}>
            {service}
          </ServiceItem>
        ))}
      </ServicesWrapper>
    </CenterServices>
  );
};

export default Services;
