import React from 'react';
import Button from '../../../common/Button/Button';
import {
  Wrapper,
  Container,
  MedcenterAddress,
  MedCenterItem,
  MedcenterName,
  PhotoCard,
  Description
} from './MedCenterStyle';

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
        <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Description>
        <Wrapper>
          <Button primary>Call</Button>
          <Button styleButton={{ backgroundColor: '#9cdd05' }}>Sign up</Button>
          <Button styleButton={{ backgroundColor: '#9cdd05' }}>Services</Button>
        </Wrapper>
      </Container>
    </MedCenterItem>
  );
};

export default MedCenter;
