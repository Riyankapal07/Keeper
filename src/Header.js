import React from 'react';
import logo from './Image/logo.png.png';
const Header = () =>{
    return ( 
    <>
     <div className="header">
        <img src={logo} alt="logo" width='100' height='70'/>
        <h2> NOTE </h2>
     </div>
    </>
    );
};

export default Header;