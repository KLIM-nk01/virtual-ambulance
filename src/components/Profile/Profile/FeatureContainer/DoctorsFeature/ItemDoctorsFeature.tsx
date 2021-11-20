import React from 'react';
import { Item, RemoveButton } from './ManagementStyle';
import Tooltip from '@mui/material/Tooltip';

interface IItemDoctorsProps {
  date: string;
  time: string;
  patientName?: string;
  _id: string;
  deleteDate: (value: string) => void;
}

const ItemDoctorsFeature: React.FC<IItemDoctorsProps> = ({
  _id,
  date,
  time,
  deleteDate,
  patientName,
}) => {
  
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
        <RemoveButton onClick={() => deleteDate(_id)} />
      )}
    </Item>
  );
};

export default ItemDoctorsFeature;
