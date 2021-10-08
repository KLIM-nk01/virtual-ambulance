import React from 'react';
import {
  CenterServices,
  ServiceItem,
  ServicesWrapper
} from './ServicesStyle';

interface IServices {
  services: string[];
}

const Services: React.FC<IServices> = ({ services }) => {
  return (
    <CenterServices>
      <span>Our services: </span>
      <ServicesWrapper>
        {services?.map((sevice) => (
          <ServiceItem>{sevice}</ServiceItem>
        ))}
      </ServicesWrapper>
    </CenterServices>
  );
};

export default Services;
