import React from 'react';
import styled from "styled-components";
import Nav from "../Nav/Nav";
import Page from "../../styleComponents/Page";

const MainPageWrapper = styled.div`
  width: 100%;
  height: 95%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background: linear-gradient(45deg, #4a88ed, #7e57f0);
`

const MainPage: React.FC = () => {
    return (
        <MainPageWrapper >
            <Nav/>
        </MainPageWrapper>
    );
};

export default MainPage;