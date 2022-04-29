import React from 'react';
import logo from '../../../images/logo.png';
import './Header.css';

export default function Header(): React.ReactElement {
  return (
    <header className='center'>
      <img src={logo} alt='logo' />
    </header>
  );
}
