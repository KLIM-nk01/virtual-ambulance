import React from 'react';
import styled from "styled-components";

const DoctorsPageWrapper = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background: linear-gradient(45deg, red, #7e57f0);
`

const DoctorsPage: React.FC = () => {
    return (
        <DoctorsPageWrapper>
            DoctorsPageWrapper
        </DoctorsPageWrapper>
    );
};

export default DoctorsPage;