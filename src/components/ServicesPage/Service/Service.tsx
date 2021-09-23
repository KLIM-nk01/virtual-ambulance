import React from 'react';
import {
  ServiceItem,
  ServiceDirection,
  DirectionIcone,
  DirectionName,
  DirectionCategories,
  Category
} from './ServiceStyle';

interface IService {
  serviceDirection: string;
  serviceCategories: Array<string>;
}
const Service: React.FC<IService> = (props) => {
  return (
    <ServiceItem>
      <DirectionIcone>{props.serviceDirection[0]}</DirectionIcone>

      <ServiceDirection>
        <DirectionName>{props.serviceDirection}</DirectionName>

        <DirectionCategories>
          {props.serviceCategories.map((category) => (
            <Category key={category}>{category}</Category>
          ))}
        </DirectionCategories>
      </ServiceDirection>
    </ServiceItem>
  );
};

export default Service;
