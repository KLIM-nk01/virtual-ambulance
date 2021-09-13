import React from 'react';
import styled from "styled-components";

const MedCentersPageWrapper = styled.div`
  width: 100%;
  height: 95%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, yellow, #7e57f0);
`

const MedCentersPage: React.FC = () => {
    return (
        <MedCentersPageWrapper>
            MedCentersPageWrapper
        </MedCentersPageWrapper>
    );
};

export default MedCentersPage;