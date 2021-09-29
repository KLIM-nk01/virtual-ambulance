import React from 'react';
import {
  AboutContainer,
  AccountInformation,
  AccountWrapper,
  PhotoContainer,
  UserName,
  AboutUser,
  ProfileInfoRow,
  InfoLabel,
  DescriptionLabel
} from './AccountStyle';

import Avatar from '@assets/NoAvatar.png';
import Button from '@components/common/Button/Button';

const Account: React.FC = () => {
  return (
    <AccountWrapper>
      <AccountInformation>
        <PhotoContainer>
          <img src={Avatar} alt="avatar" />
          <Button round variant="contained">
            Edit
          </Button>
        </PhotoContainer>
        <AboutContainer>
          <UserName>
            <span>Nikita Klimovich</span>
          </UserName>

          <AboutUser>
            <ProfileInfoRow>
              <InfoLabel>ДЕнь рождения: </InfoLabel>
              <DescriptionLabel>10.01.2001</DescriptionLabel>
            </ProfileInfoRow>
          </AboutUser>
        </AboutContainer>
      </AccountInformation>
    </AccountWrapper>
  );
};

export default Account;
