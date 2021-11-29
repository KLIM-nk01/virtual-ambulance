import React from 'react';
import { CenterServices, ServiceItem, ServicesWrapper } from './ServicesStyle';

interface IServices {
  services: string[];
  adminPanel?: boolean;
}

const Services: React.FC<IServices> = ({ services, adminPanel }) => {
  return (
    <CenterServices>
      <span>Our services: </span>
      <ServicesWrapper adminPanel={adminPanel}>
        {services?.map((service) => (
          <ServiceItem adminPanel={adminPanel} key={service}>
            {service}
          </ServiceItem>
        ))}
      </ServicesWrapper>
    </CenterServices>
  );
};

export default Services;
