import React from 'react';
import {MedCenterItem, MedcenterName, MedcenterPhoto} from "./MedCenterStyle";

const MedCenter: React.FC  = () => {
    return (
        <MedCenterItem>
            <MedcenterName>MedcentrName</MedcenterName>
            <MedcenterPhoto></MedcenterPhoto>
            {/*<MedcenterDiscription></MedcenterDiscription>*/}

        </MedCenterItem>
    );
};

export default MedCenter;