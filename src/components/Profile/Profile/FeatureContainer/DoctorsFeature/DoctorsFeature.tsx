import React from 'react';
import { ContainerName, DoctorsFeatureWrapper } from './DoctorsFeatureStyle';
import OrderManagement from './OrderManagement/OrderManagement';

import WorkTimeManagement from './WorkTimeManagement/WorkTimeManagement';

const DoctorsFeature: React.FC = () => {
  return (
    <DoctorsFeatureWrapper>
      <WorkTimeManagement />
      <OrderManagement />
    </DoctorsFeatureWrapper>
  );
};

export default DoctorsFeature;
