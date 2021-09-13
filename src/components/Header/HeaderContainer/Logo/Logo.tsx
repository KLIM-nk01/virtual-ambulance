import React from 'react';
import { NavLink } from 'react-router-dom'



const Logo: React.FC = () => {
    return (
        <div>
            <NavLink to={'/'}>logo</NavLink>
        </div>
    );
};

export default Logo;