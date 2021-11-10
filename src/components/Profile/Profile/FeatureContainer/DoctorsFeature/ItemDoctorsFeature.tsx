import React from 'react';
import { Item, RemoveButton } from './ManagementStyle';
interface IItemDoctorsProps {
  date: string;
  time: string;
  _id: string;
  deleteDate: (value: string) => void;
}

const ItemDoctorsFeature: React.FC<IItemDoctorsProps> = ({ _id, date, time, deleteDate }) => {
  return (
    <Item>
      <span>{time}</span>
      <span>{date}</span>
      <RemoveButton onClick={() => deleteDate(_id)} />
    </Item>
  );
};

export default ItemDoctorsFeature;
