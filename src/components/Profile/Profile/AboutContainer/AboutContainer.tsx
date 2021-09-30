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
      <span>Nikita Klimovich</span>
    </UserName>

    <AboutUser>
      <ProfileInfoRow>
        <InfoLabel>Birthday: </InfoLabel>
        <DescriptionLabel>10.01.2001</DescriptionLabel>
      </ProfileInfoRow>

      <ProfileInfoRow>
        <InfoLabel>Email: </InfoLabel>
        <DescriptionLabel>nikita.klimovich.20@gmail.com</DescriptionLabel>
      </ProfileInfoRow>

      <ProfileInfoRow>
        <InfoLabel>Phone Number: </InfoLabel>
        <DescriptionLabel>+375(29)397-51-03</DescriptionLabel>
      </ProfileInfoRow>

      <ProfileInfoRow>
        <InfoLabel>Work Place: </InfoLabel>
        <DescriptionLabel>Student</DescriptionLabel>
      </ProfileInfoRow>
    </AboutUser>
  </Container>
);

export default AboutContainer;
