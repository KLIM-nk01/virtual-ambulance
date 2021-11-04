import React from 'react';
import { ContainerName, DoctorsFeatureWrapper } from './DoctorsFeatureStyle';
import OrderManagement from './OrderManagement/OrderManagement';

import WorkTimeManagement from './WorkTimeManagement/WorkTimeManagement';

const DoctorsFeature: React.FC = () => {
  return (
    <DoctorsFeatureWrapper>
      <ContainerName>My Function</ContainerName>
      <WorkTimeManagement />
      <OrderManagement />
    </DoctorsFeatureWrapper>
  );
};

export default DoctorsFeature;
