import { UserData } from '@data/UserData';
import React from 'react';
import {
  AboutUser,
  Container,
  DescriptionLabel,
  InfoLabel,
  ProfileInfoRow,
  UserName
} from './AboutContainerStyle';

const AboutContainer = () => (
  <Container>
    <UserName>
      <span>{UserData.name}</span>
    </UserName>

    <AboutUser>
      <ProfileInfoRow>
        <InfoLabel>Birthday: </InfoLabel>
        <DescriptionLabel>{UserData.birthday}</DescriptionLabel>
      </ProfileInfoRow>

      <ProfileInfoRow>
        <InfoLabel>Email: </InfoLabel>
        <DescriptionLabel>{UserData.email}</DescriptionLabel>
      </ProfileInfoRow>

      <ProfileInfoRow>
        <InfoLabel>Phone Number: </InfoLabel>
        <DescriptionLabel>{UserData.phoneNumber}</DescriptionLabel>
      </ProfileInfoRow>

      <ProfileInfoRow>
        <InfoLabel>Work Place: </InfoLabel>
        <DescriptionLabel>{UserData.workPlace}</DescriptionLabel>
      </ProfileInfoRow>

      <ProfileInfoRow>
        <InfoLabel>Address: </InfoLabel>
        <DescriptionLabel>{UserData.address}</DescriptionLabel>
      </ProfileInfoRow>
    </AboutUser>
  </Container>
);

export default AboutContainer;
