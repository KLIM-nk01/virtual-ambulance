import Button from '@components/common/Button/Button';
import React from 'react';
import ItemDoctorsFeature from '../ItemDoctorsFeature';
import {
  ContainersName,
  ContainerFooter,
  ContainerContent
} from '../ManagementStyle';
import { TimeManagementContainer } from './WorkTimeManagementStyle';

const WorkTimeManagement: React.FC = () => {
  return (
    <TimeManagementContainer>
      <ContainersName>Work Time</ContainersName>
      <ContainerContent>
        <ItemDoctorsFeature/>
      </ContainerContent>

      <ContainerFooter>
        <Button round size="small" variant="contained">
          Add
        </Button>
      </ContainerFooter>
    </TimeManagementContainer>
  );
};

export default WorkTimeManagement;
