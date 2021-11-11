import React from 'react';
import Button from '@components/common/Button/Button';
import {
  VisitItemContainer,
  ContainerFooter,
  VisitInformation,
  MedCenterInformation,
  GeneralInformation,
  Date,
  DoctorsInformation,
  DoctorsInfo,
} from './VisitItemStyle';
import { IPatientVisit } from '@store/types/profileData';
import { useDispatch } from 'react-redux';
import { profilePatientDeleteAppointment } from '@store/actionCreators/profileData';

const VisitItem: React.FC<IPatientVisit> = ({
  doctorName,
  doctorLastName,
  doctorDirection,
  medCenterName,
  medCenterAddress,
  date,
  time,
  _idDate,
}) => {
  const dispatch = useDispatch();

  return (
    <VisitItemContainer>
      <VisitInformation>
        <MedCenterInformation>
          <h2>{medCenterName}</h2>
          <p>{medCenterAddress}</p>
        </MedCenterInformation>
        <GeneralInformation>
          <Date>
            <span>
              <b>Date:</b> {date}
            </span>
            <span>
              <b>Time:</b> {time}
            </span>
          </Date>
        </GeneralInformation>
        <DoctorsInformation>
          <DoctorsInfo>{doctorDirection}</DoctorsInfo>
          <DoctorsInfo>
            {doctorLastName} {doctorName}
          </DoctorsInfo>
        </DoctorsInformation>
      </VisitInformation>
      <ContainerFooter>
        <Button
          onClick={() => dispatch(profilePatientDeleteAppointment(_idDate))}
          size="small"
          round
        >
          Cancel
        </Button>
      </ContainerFooter>
    </VisitItemContainer>
  );
};

export default VisitItem;
