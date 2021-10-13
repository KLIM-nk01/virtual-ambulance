import React from 'react';
import { ContainerName, DoctorsFeatureWrapper } from './DoctorsFeatureStyle';
import OrderMenegment from './OrderMenegment/OrderManagement';
import WorkTimeMenegment from './WorkTimeManagement/WorkTimeManagement';

const DoctorsFeature: React.FC = () => {
  return (
    <DoctorsFeatureWrapper>
      <ContainerName>My Function</ContainerName>
      <WorkTimeMenegment />
      <OrderMenegment />
    </DoctorsFeatureWrapper>
  );
};

export default DoctorsFeature;
