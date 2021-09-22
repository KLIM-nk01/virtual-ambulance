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
const Service: React.FC<IService> = ({ ...service }) => {
  return (
    <ServiceItem>
      <DirectionIcone>{service.serviceDirection[0]}</DirectionIcone>

      <ServiceDirection>
        <DirectionName>{service.serviceDirection}</DirectionName>

        <DirectionCategories>
          {service.serviceCategories.map((category) => {
            return <Category>{category}</Category>;
          })}
        </DirectionCategories>
      </ServiceDirection>
    </ServiceItem>
  );
};

export default Service;
