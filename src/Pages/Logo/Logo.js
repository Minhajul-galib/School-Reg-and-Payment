import React from 'react';
import logo from '../../assets/img/logo.png';


const Logo = () => {
    return (
        <div className='pb-5'>
                <a href="/"><img src={logo} alt="" width='150' /></a>
        </div>
    );
};

export default Logo;