import React, {useState} from 'react';
import styled from "styled-components";
import ReactMapGL, {Marker} from 'react-map-gl';
import marker from '../../../assets/marker.png'

const MedCentersMapStyle = styled.div`
  width: 60%;
  height: 100%;
  color: black;

`
const MarkerStyle = styled.img`
  width: 30px;
  cursor: pointer;
`
interface IState {
    latitude: number,
    longitude: number,
    zoom: number,
    width: string,
    height: string
}

const MedCentersMap: React.FC = () => {
    const [viewport, setViewPort] = useState<IState>({
        latitude: 53.900601,
        longitude: 27.558972,
        zoom: 11,
        width: '100%',
        height: '100%'
    })
    return (
        <MedCentersMapStyle>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={'pk.eyJ1Ijoia2xpbS1uazAxIiwiYSI6ImNrdGx4eHI4azA2bGoybnM4b3d4aTlvZjMifQ.7cxgikPKgzMV2ZjWS97ehg'}
                onViewportChange={(viewport: React.SetStateAction<IState>) => {
                    setViewPort(viewport)
                }}
                mapStyle={'mapbox://styles/mapbox/streets-v11'}
            ><Marker latitude={53.900601} longitude={27.558972} offsetLeft={-20} offsetTop={-10}>
                <MarkerStyle src={marker} alt={''}></MarkerStyle>
            </Marker></ReactMapGL>
        </MedCentersMapStyle>
    );
};
export default MedCentersMap;