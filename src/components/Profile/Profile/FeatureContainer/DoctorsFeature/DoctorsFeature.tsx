import React from 'react';
import { ContainerName, Container } from './DoctorsFeatureStyle';
import OrderMenegment from './OrderMenegment/OrderMenegment';
import WorkTimeMenegment from './WorkTimeMenegment/WorkTimeMenegment';

const DoctorsFeature: React.FC = () => {
  return (
    <Container>
      <ContainerName>My Function</ContainerName>
      <WorkTimeMenegment/>
      <OrderMenegment></OrderMenegment>

    </Container>
  );
};

export default DoctorsFeature;
