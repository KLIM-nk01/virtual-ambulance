import Button from '@components/common/Button/Button';
import React from 'react';
import {
  Container,
  ContainersName,
  ContainerFooter,
  Item,
  ContainerContent,
} from '../MenegmentStyle';
import { OrderMenegmentContainer } from './OrderMenegmentStyle';

const WorkTimeMenegment: React.FC = () => {
  return (
    <OrderMenegmentContainer>
      <ContainersName>Patient</ContainersName>
      <ContainerContent>
        <Item>
          <span>Nikita Klimovich</span>
          <span>8.00am, 10.10.2021</span>
          <Button round size="small"></Button>
        </Item>
      </ContainerContent>
    </OrderMenegmentContainer>
  );
};

export default WorkTimeMenegment;
