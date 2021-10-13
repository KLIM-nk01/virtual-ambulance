import React from 'react';
import { ContainersName, Item, ContainerContent } from '../ManagementStyle';
import { OrderManagementContainer } from './OrderManagementStyle';

const WorkTimeManagement: React.FC = () => {
  return (
    <OrderManagementContainer>
      <ContainersName>Patient</ContainersName>
      <ContainerContent>
        <Item>
          <span>Nikita Klimovich</span>
          <span>8.00am, 10.10.2021</span>
         
        </Item>
      </ContainerContent>
    </OrderManagementContainer>
  );
};

export default WorkTimeManagement;
