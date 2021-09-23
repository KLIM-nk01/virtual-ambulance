import React from 'react';
import { ServicesPageWrapper, ServicesContainer } from './ServicesPageStyle';
import Service from './Service/Service';

const ServicesPage: React.FC<any> = ({services}) => {
  return (
    <ServicesPageWrapper>
      <ServicesContainer>
        {services.map((service:any) => {
          return (
            <Service key={service.serviceDirection} {...service}></Service>
          );
        })}
      </ServicesContainer>
    </ServicesPageWrapper>
  );
};

export default ServicesPage;
