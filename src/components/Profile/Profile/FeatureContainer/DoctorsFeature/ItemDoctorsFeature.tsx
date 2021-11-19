import React from 'react';
import { Item, RemoveButton } from './ManagementStyle';
import Tooltip from '@mui/material/Tooltip';

interface IItemDoctorsProps {
  date: string;
  time: string;
  idWorkTime: string;
  patientName?: string;
  _id: string;
  deleteDate: (value: string) => void;
}

const ItemDoctorsFeature: React.FC<IItemDoctorsProps> = ({
  idWorkTime,
  _id,
  date,
  time,
  deleteDate,
  patientName,
}) => {
  
  const deleteDateTime = () => {
    idWorkTime ? deleteDate(idWorkTime) : deleteDate(_id);
  };
  return (
    <Item>
      <span>{time}</span>
      <span>{date}</span>
      {patientName ? (
        <Tooltip
          placement="top"
          title="You cannot delete this time, since the patient has already been registered at this time."
        >
          <RemoveButton disabled />
        </Tooltip>
      ) : (
        <RemoveButton onClick={deleteDateTime} />
      )}
    </Item>
  );
};

export default ItemDoctorsFeature;
