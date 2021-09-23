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
const Service: React.FC<IService> = ( {serviceDirection,  serviceCategories}) => {
  return (
    <ServiceItem>
      <DirectionIcone>{serviceDirection[0]}</DirectionIcone>

      <ServiceDirection>
        <DirectionName>{serviceDirection}</DirectionName>

        <DirectionCategories>
          {serviceCategories.map((category) => <Category>{category}</Category> )}
        </DirectionCategories>
      </ServiceDirection>
    </ServiceItem>
  );
};

export default Service;
