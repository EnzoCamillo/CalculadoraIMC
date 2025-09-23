import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Calculadora de IMC</h1>
        <p className="header-subtitle">Índice de Massa Corporal</p>
      </div>
    </header>
  );
};

export default Header;