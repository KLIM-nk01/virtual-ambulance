import React from 'react';
import { ServicesPageWrapper, ServicesContainer } from './ServicesPageStyle';
import { services } from '@data/services/services';
import Service from './Service/Service';

const ServicesPage: React.FC = () => {
  return (
    <ServicesPageWrapper>
      <ServicesContainer>
        {services.map((service) => {
          return (
            <Service key={service.serviceDirection} {...service}></Service>
          );
        })}
      </ServicesContainer>
    </ServicesPageWrapper>
  );
};

export default ServicesPage;
