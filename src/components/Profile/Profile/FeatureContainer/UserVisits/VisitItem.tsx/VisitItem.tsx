import React from 'react';
import Button from '@components/common/Button/Button';
import {
  VisitItemContainer,
  ContainerFooter,
  VisitInformation,
  MedCenterInformation,
  GeneralInformation,
  TicketInfo,
  Date,
  DoctorsInformation,
  DoctorsInfo,
  DoctorsСabinet,
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
          <Date>
            <span>date time</span>
          </Date>
        </GeneralInformation>
        <DoctorsInformation>
          <DoctorsInfo>Allergolod</DoctorsInfo>
          <DoctorsInfo>Moiseichuk Olga Valerievna</DoctorsInfo>
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
