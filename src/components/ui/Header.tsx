import React from 'react';
import logo from '../../images/logo.png';

export default function Header() {
  return (
    <header className='center'>
      <img src={logo} alt='logo' />
    </header>
  );
}