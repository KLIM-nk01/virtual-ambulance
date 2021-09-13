import React from 'react';
import styled from "styled-components";
import GlobalStyle from "../../styleComponents/globalstyle";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import MedCentersPage from "../MedCentersPage/MedCentersPage";
import DoctorsPage from "../DoctorsPage/DoctorsPage";


const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <AppWrapper>
                <Header/>
                    <Route exact  path={'/'}  render={() => <MainPage/>}/>
                    <Route path={'/medCentersPage'} render={() => <MedCentersPage/>}/>
                    <Route path={'/doctorsPage'} render={() => <DoctorsPage/>}/>
            </AppWrapper>
        </BrowserRouter>
    );
};

export default App;