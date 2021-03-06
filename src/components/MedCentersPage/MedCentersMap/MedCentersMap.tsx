import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Tooltip from '@mui/material/Tooltip';
import marker from '@assets/marker.png';
import { MarkerStyle, MedCentersMapStyle } from './MedCentersMapStyle';
import { IMedStaff } from '../MedCentersList/MedCentersList';
import markerHover from '@assets/markerHover.png';

interface IState {
  latitude: number;
  longitude: number;
  zoom: number;
  width: string;
  height: string;
}

interface IMedCenterMap {
  medCenters: {
    _id: string;
    name: string;
    address: string;
    description: string;
    services: string[];
    medStaff: IMedStaff[];
    location: {
      lat: number;
      lon: number;
    };
  }[];
  hoverMedCenter: string;
}
const MedCentersMap: React.FC<IMedCenterMap> = ({ medCenters, hoverMedCenter }) => {
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
            key={medCenter._id}
            latitude={medCenter.location.lat}
            longitude={medCenter.location.lon}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Tooltip placement="top" title={`${medCenter.name} ${medCenter.address}`}>
              <MarkerStyle
                medCenterHover={hoverMedCenter === medCenter._id}
                src={hoverMedCenter === medCenter._id ? markerHover : marker}
                alt="Map Marker"
              ></MarkerStyle>
            </Tooltip>
          </Marker>
        ))}
      </ReactMapGL>
    </MedCentersMapStyle>
  );
};
export default MedCentersMap;
