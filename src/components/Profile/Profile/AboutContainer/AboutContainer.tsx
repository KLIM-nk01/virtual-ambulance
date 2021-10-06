import { usersData } from '@data/usersData';
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
      <span>{usersData.name}</span> <span>{usersData.lastName}</span>
    </UserName>

    <AboutUser>
      <ProfileInfoRow>
        <InfoLabel>Birthday: </InfoLabel>
        <DescriptionLabel>{usersData.birthday}</DescriptionLabel>
      </ProfileInfoRow>

      <ProfileInfoRow>
        <InfoLabel>Email: </InfoLabel>
        <DescriptionLabel>{usersData.email}</DescriptionLabel>
      </ProfileInfoRow>

      <ProfileInfoRow>
        <InfoLabel>Phone Number: </InfoLabel>
        <DescriptionLabel>{usersData.phone}</DescriptionLabel>
      </ProfileInfoRow>

      {/* <ProfileInfoRow>
        <InfoLabel>Work Place: </InfoLabel>
        <DescriptionLabel>{usersData.workPlace}</DescriptionLabel>
      </ProfileInfoRow> */}

      <ProfileInfoRow>
        <InfoLabel>Address: </InfoLabel>
        <DescriptionLabel>{usersData.address}</DescriptionLabel>
      </ProfileInfoRow>
    </AboutUser>
  </Container>
);

export default AboutContainer;
