import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import './style.css';

import FacebookLogo from '../../assets/facebook-logo.png';

function Header() {
  return (
    <header>
      <img src={FacebookLogo} alt="Facebook" id="logo"/>
      <div id="profile-box">
        <span>Meu perfil</span>
        <FaUserCircle id="icon"/>
      </div>
    </header>
  );
}

export default Header;