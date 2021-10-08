import React from 'react';
import {
  CenterServices,
  MoreButtton,
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
      <MoreButtton>More...</MoreButtton>
    </CenterServices>
  );
};

export default Services;
