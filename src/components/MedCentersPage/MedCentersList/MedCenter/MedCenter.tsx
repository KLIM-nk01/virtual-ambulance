import React from 'react';
import {
  Wrapper,
  Container,
  MedcenterAddress,
  MedCenterItem,
  MedcenterName,
  PhotoCard,
  Description,
} from './MedCenterStyle';
import Button from '@components/common/Button/Button';

const MedCenter: React.FC = () => {
  return (
    <MedCenterItem>
      <MedcenterName>LODE</MedcenterName>
      <MedcenterAddress>address</MedcenterAddress>

      <Container>
        <Wrapper>
          <PhotoCard>photo</PhotoCard>
          <PhotoCard>photo</PhotoCard>
          <PhotoCard>photo</PhotoCard>
          <PhotoCard>photo</PhotoCard>
        </Wrapper>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Description>
        <Wrapper>
          <Button primary>Call</Button>
          <Button primary>Sign up</Button>
          <Button primary >Services</Button>
        </Wrapper>
      </Container>
    </MedCenterItem>
  );
};

export default MedCenter;
