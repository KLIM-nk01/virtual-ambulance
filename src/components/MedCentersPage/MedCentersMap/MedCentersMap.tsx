import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import marker from '@assets/marker.png';
import { MarkerStyle, MedCentersMapStyle } from './MedCentersMapStyle';

interface IState {
  latitude: number;
  longitude: number;
  zoom: number;
  width: string;
  height: string;
}

interface IMedCenterMap {
  medCenters: {
    id_medcenter: string;
    name: string;
    address: string;
    // photo: photo.NORDIN;
    description: string;
    services: string[];
    medStaff: string[];
    location: {
      lat: number;
      lon: number;
    };
  }[];
}
const MedCentersMap: React.FC<IMedCenterMap> = ({ medCenters }) => {
  const [viewport, setViewPort] = useState<IState>({
    latitude: 53.900601,
    longitude: 27.558972,
    zoom: 11,
    width: '100%',
    height: '100%',
  });

  return (
    <MedCentersMapStyle>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.MAP_TOKEN}
        onViewportChange={(viewport: React.SetStateAction<IState>) => {
          setViewPort(viewport);
        }}
        mapStyle={'mapbox://styles/mapbox/streets-v11'}
      >
        {medCenters.map((medCenter) => (
          <Marker
            key={medCenter.id_medcenter}
            latitude={medCenter.location.lat}
            longitude={medCenter.location.lon}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <MarkerStyle src={marker} alt={''}></MarkerStyle>
          </Marker>
        ))}
      </ReactMapGL>
    </MedCentersMapStyle>
  );
};
export default MedCentersMap;
