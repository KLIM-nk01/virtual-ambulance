import React from 'react';
import styled from "styled-components";
import GlobalStyle from "../../style/globalstyle"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import MedCentersPage from "../MedCentersPage/MedCentersPage";
import DoctorsPage from "../DoctorsPage/DoctorsPage";
import {AppWrapper} from "./AppStyle";
import {ROUTS} from "../../constants/routs";



const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <AppWrapper>
                <Header/>
                <Switch>
                    <Route exact path={ROUTS.MAIN_PAGE_PATH}  render={() => <MainPage/>}/>
                    <Route exact path={ROUTS.MEDCENTERS_PAGE_PATH} render={() => <MedCentersPage/>}/>
                    <Route exact path={ROUTS.DOCTORS_PAGE_PATH} render={() => <DoctorsPage/>}/>
                </Switch>

                {/*<LogInForm/>*/}
            </AppWrapper>
        </BrowserRouter>
    );
};

export default App;
