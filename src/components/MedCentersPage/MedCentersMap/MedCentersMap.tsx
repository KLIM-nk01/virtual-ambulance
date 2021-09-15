import React from 'react';
import styled from "styled-components";
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

const MedCentersMapStyle = styled.div`
  width: 60%;
  height: 100%;
  color: black;
  
`
const Map: React.FC = () => {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: 53.904541, lng: 27.561523}}
        />
    );
}

const WrapperMap = withScriptjs(withGoogleMap(Map));

const MedCentersMap: React.FC = () => {
    return (
        <MedCentersMapStyle>
            <WrapperMap
                googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyBtXkDdxkVstEw67EwozHW5awXSPlCvd_I&callback=initMap'}
                loadingElement={<div style={{height: '100%'}}/>}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
             />
        </MedCentersMapStyle>
          );
};
export default MedCentersMap;