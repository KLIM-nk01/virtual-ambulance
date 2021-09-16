import React from 'react';
import {NavLink} from 'react-router-dom';
import CenterLogo from '../../../assets/Center.png';
import DoctorsLogo from '../../../assets/doctorsLogo.png';
import Services from '../../../assets/Services.png';
import UserAccount from '../../../assets/Account.png';
import {NavWrapper, NavItem} from "./NavStyle";

const Nav: React.FC = () => {
    return (
        <NavWrapper>
            <NavLink to={'/medCentersPage'}>
                <NavItem>
                    {/*<CenterLogo/>*/}
                    <img src={CenterLogo} alt={'medCenter'}/>
                    <span>Finding a medical center</span>
                </NavItem>
            </NavLink>
            <NavLink to={'/doctorsPage'}>
                <NavItem>
                    <img src={DoctorsLogo} alt={'medCenter'}/>
                    <span>Finding a doctor</span>
                </NavItem>
            </NavLink>
            <NavLink to={'/servicesPage'}>
                <NavItem>
                    <img src={Services} alt={'medCenter'}/>
                    <span>View services</span>
                </NavItem>
            </NavLink>
            <NavLink to={'/usersAccount'}>
                <NavItem>
                    <img src={UserAccount} alt={'medCenter'}/>
                    <span>Personal Area</span>
                </NavItem>
            </NavLink>
        </NavWrapper>
    );
};

export default Nav;
