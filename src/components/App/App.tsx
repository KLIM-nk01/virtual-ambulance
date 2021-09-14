import React from 'react';
import styled from "styled-components";
import GlobalStyle from "../../style/globalstyle"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import MedCentersPage from "../MedCentersPage/MedCentersPage";
import DoctorsPage from "../DoctorsPage/DoctorsPage";
import LogInForm from "../LogInForm/LogInForm";

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
                <Switch>
                    <Route exact path={'/'}  render={() => <MainPage/>}/>
                    <Route path={'/medCentersPage'} render={() => <MedCentersPage/>}/>
                    <Route path={'/doctorsPage'} render={() => <DoctorsPage/>}/>
                </Switch>

                {/*<LogInForm/>*/}
            </AppWrapper>
        </BrowserRouter>
    );
};

export default App;