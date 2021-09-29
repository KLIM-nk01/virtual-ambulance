import React from 'react';
import {
  AboutContainer,
  AccountInformation,
  AccountWrapper,
  PhotoContainer
} from './AccountStyle';

import Avatar from '@assets/NoAvatar.png';
import Button from '@components/common/Button/Button';

const Account: React.FC = () => {
  return (
    <AccountWrapper>
      <AccountInformation>
        <PhotoContainer>
          <img src={Avatar} alt="avatar" />
          <Button variant="contained">Edit</Button>
        </PhotoContainer>
        <AboutContainer>
          {/* <UserName></UserName>
          <AboutUser></AboutUser> */}
        </AboutContainer>
      </AccountInformation>
    </AccountWrapper>
  );
};

export default Account;
