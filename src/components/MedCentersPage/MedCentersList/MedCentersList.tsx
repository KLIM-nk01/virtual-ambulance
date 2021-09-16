import React from 'react';
import {MedCentersListWrapper} from "./MedCentersListStyle";
import MedCenter from "./MedCenter/MedCenter";
import Search from "../../Header/Search/Search";

const MedCentersList: React.FC = () => {
    return (
        <MedCentersListWrapper>
            <MedCenter/>
            <MedCenter/>
            <MedCenter/>
            <MedCenter/>
            <MedCenter/>
            <MedCenter/>
            <MedCenter/>
            <MedCenter/>
        </MedCentersListWrapper>
    );
};

export default MedCentersList;
