import Button from '@components/common/Button/Button';
import React from 'react';
import {
  VisitItemContainer,
  ContainerFooter,
  VisitInformation,
  MedCenterInformation,
  GeneralInformation,
  TicketInfo,
  Date,
  DoctorsInformation,
  DoctorsDirection,
  DoctorsName,
  DoctorsСabinet
} from './VisitItemStyle';

const VisitItem: React.FC = () => {
  return (
    <VisitItemContainer>
      <VisitInformation>
        <MedCenterInformation>
          <h2>Lode</h2>
          <p>Minsk, Independence, 58A</p>
        </MedCenterInformation>
        <GeneralInformation>
          <TicketInfo>
            <p>Doctor's appointment ticket №234567</p>
          </TicketInfo>
          <Date>
            <span>29th November 2021, </span>
            <span>Wednesday</span>
            <span>8.30am</span>
            <span></span>
          </Date>
        </GeneralInformation>
        <DoctorsInformation>
          <DoctorsDirection>Allergolod</DoctorsDirection>
          <DoctorsName>Moiseichuk Olga Valerievna</DoctorsName>
          <DoctorsСabinet>Cab. 512</DoctorsСabinet>
        </DoctorsInformation>
      </VisitInformation>
      <ContainerFooter>
        <Button size="small" round>
          Cancel
        </Button>
      </ContainerFooter>
    </VisitItemContainer>
  );
};

export default VisitItem;