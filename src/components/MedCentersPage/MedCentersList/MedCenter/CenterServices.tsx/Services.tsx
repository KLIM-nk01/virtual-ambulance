import React from 'react';
import uniqid from 'uniqid';
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
          <ServiceItem key={uniqid()} >{sevice}</ServiceItem>
        ))}
      </ServicesWrapper>
    </CenterServices>
  );
};

export default Services;
