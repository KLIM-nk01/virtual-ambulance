import React from 'react';
import { useTypesSelector } from '@hooks/UseTypedSelector';
import { USER_ROLE } from '@constants/userRole';
import {
  AboutUser,
  Container,
  DescriptionLabel,
  InfoLabel,
  ProfileInfoRow,
  UserName,
} from './AboutContainerStyle';
import Avatar from '@mui/material/Avatar';

const AboutContainer: React.FC = () => {
  const profileData = useTypesSelector((state) => state.profile.profileData);
  const user = useTypesSelector((state) => state.user.currentUser);
  return (
    <Container>
      <UserName>
        <Avatar sx={{ width: 56, height: 56 }} src={user.photo} />
        <span>{profileData?.name}</span> <span>{profileData?.lastName}</span>
      </UserName>

      <AboutUser>
        <ProfileInfoRow>
          <InfoLabel>Почта: </InfoLabel>
          <DescriptionLabel>{profileData?.email}</DescriptionLabel>
        </ProfileInfoRow>

        <ProfileInfoRow>
          <InfoLabel>Номер телефона: </InfoLabel>
          <DescriptionLabel>{profileData?.phone}</DescriptionLabel>
        </ProfileInfoRow>

        {user.userRole === USER_ROLE.patient && (
          <>
            <ProfileInfoRow>
              <InfoLabel>Дата рождения: </InfoLabel>
              <DescriptionLabel>{profileData?.birthday}</DescriptionLabel>
            </ProfileInfoRow>

            <ProfileInfoRow>
              <InfoLabel>Адрес: </InfoLabel>
              <DescriptionLabel>{profileData?.address}</DescriptionLabel>
            </ProfileInfoRow>
          </>
        )}

        {user.userRole === USER_ROLE.doctor && (
          <>
            <ProfileInfoRow>
              <InfoLabel>Опыт: </InfoLabel>
              <DescriptionLabel>{profileData?.experience} years.</DescriptionLabel>
            </ProfileInfoRow>

            <ProfileInfoRow>
              <InfoLabel>Описание: </InfoLabel>
              <DescriptionLabel>{profileData?.direction}</DescriptionLabel>
            </ProfileInfoRow>

            <ProfileInfoRow>
              <InfoLabel>Место работы: </InfoLabel>
              <DescriptionLabel>
                "{profileData?.workPlace?.name}", {profileData?.workPlace?.address}
              </DescriptionLabel>
            </ProfileInfoRow>
          </>
        )}
      </AboutUser>
    </Container>
  );
};

export default AboutContainer;
