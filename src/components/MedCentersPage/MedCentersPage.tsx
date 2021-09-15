import React from 'react';
import styled from "styled-components";
import {MedCentersPageWrapper} from "./MedcentersPageStyle";
import MedCentersList from "./MedCentersList/MedCentersList";
import MedCentersMap from "./MedCentersMap/MedCentersMap";
import Map from "./MedCentersMap/MedCentersMap";


const MedCentersPage: React.FC = () => {
    return (
       <MedCentersPageWrapper>
           <MedCentersList></MedCentersList>
           <MedCentersMap></MedCentersMap>
       </MedCentersPageWrapper>
    );
};

export default MedCentersPage;