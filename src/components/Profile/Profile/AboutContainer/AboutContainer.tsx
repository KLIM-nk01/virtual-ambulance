import React from 'react';
import { usersData } from '@data/usersData';
import {
  AboutUser,
  Container,
  DescriptionLabel,
  InfoLabel,
  ProfileInfoRow,
  UserName,
} from './AboutContainerStyle';
import { useTypesSelector } from '@hooks/UseTypedSelector';

const AboutContainer: React.FC = () => {
  const profileData = useTypesSelector((state) => state.profile.profileData);
  const user = useTypesSelector((state) => state.user.currentUser);
  return (
    <Container>
      <UserName>
        <span>{profileData?.name}</span> <span>{profileData?.lastName}</span>
      </UserName>

      <AboutUser>
        <ProfileInfoRow>
          <InfoLabel>Email: </InfoLabel>
          <DescriptionLabel>{profileData?.email}</DescriptionLabel>
        </ProfileInfoRow>

        <ProfileInfoRow>
          <InfoLabel>Phone Number: </InfoLabel>
          <DescriptionLabel>{profileData?.phone}</DescriptionLabel>
        </ProfileInfoRow>

        {user.userRole === 'patient' && (
          <>
            <ProfileInfoRow>
              <InfoLabel>Birthday: </InfoLabel>
              <DescriptionLabel>{profileData?.birthday}</DescriptionLabel>
            </ProfileInfoRow>

            <ProfileInfoRow>
              <InfoLabel>Address: </InfoLabel>
              <DescriptionLabel>{profileData?.address}</DescriptionLabel>
            </ProfileInfoRow>
          </>
        )}

        {user.userRole === 'doctor' && (
          <>
            <ProfileInfoRow>
              <InfoLabel>Experience: </InfoLabel>
              <DescriptionLabel>{profileData?.experience} years.</DescriptionLabel>
            </ProfileInfoRow>

            <ProfileInfoRow>
              <InfoLabel>Direction: </InfoLabel>
              <DescriptionLabel>{profileData?.direction}</DescriptionLabel>
            </ProfileInfoRow>

            <ProfileInfoRow>
              <InfoLabel>Work Place: </InfoLabel>
              <DescriptionLabel>
                {profileData?.workPlace?.name} Address: {profileData?.workPlace?.address}
              </DescriptionLabel>
            </ProfileInfoRow>
          </>
        )}
      </AboutUser>
    </Container>
  );
};

export default AboutContainer;
