import Button from '@components/common/Button/Button';
import React from 'react';
import {
  Container,
  ContainersName,
  ContainerFooter,
  Item,
  ContainerContent,
} from '../ManagementStyle';

const WorkTimeManagement: React.FC = () => {
  return (
    <Container>
      <ContainersName>Work Time</ContainersName>
      <ContainerContent>
        <Item>
          <span>8.30am</span>
          <span>10.10.2021</span>
          <Button round size="small"></Button>
        </Item>
      </ContainerContent>

      <ContainerFooter>
        <Button round size="small" variant="contained">
          Add
        </Button>
      </ContainerFooter>
    </Container>
  );
};

export default WorkTimeManagement;
