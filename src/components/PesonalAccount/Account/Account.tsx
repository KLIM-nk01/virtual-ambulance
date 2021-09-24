import Button from '@components/common/Button/Button';
import React from 'react';
import {
  AccountContainer,
  InformationContainer,
  PossibilitiesContainer,
  AccountAvatar,
  ContainerOne,
  ContainerTwo
} from './AccountStyle';
import Ava from '@assets/Olga.jpg';
import { Input } from '@components/common/Input/Input';

const Account: React.FC = () => {
  return (
    <AccountContainer>
      <InformationContainer>
        <ContainerOne>
          <AccountAvatar src={Ava} />
          <Button primary width={'80%'}>
            Edit Profie
          </Button>
        </ContainerOne>

        <ContainerTwo>
          <Input />
          <Input />
          <Input />
          <Input />
        </ContainerTwo>
      </InformationContainer>

      <PossibilitiesContainer></PossibilitiesContainer>
    </AccountContainer>
  );
};

export default Account;
