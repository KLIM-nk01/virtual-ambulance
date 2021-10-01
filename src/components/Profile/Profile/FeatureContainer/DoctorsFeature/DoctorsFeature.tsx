import React from 'react';
import { ContainerName, Container } from './DoctorsFeatureStyle';
import OrderMenegment from './OrderMenegment/OrderManagement';
import WorkTimeMenegment from './WorkTimeManagement/WorkTimeManagement';

const DoctorsFeature: React.FC = () => {
  return (
    <Container>
      <ContainerName>My Function</ContainerName>
      <WorkTimeMenegment />
      <OrderMenegment />
    </Container>
  );
};

export default DoctorsFeature;
