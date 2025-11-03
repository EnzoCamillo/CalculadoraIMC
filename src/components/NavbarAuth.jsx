import React from 'react';
import './NavbarAuth.css';

function NavbarAuth({ usuarioLogado, tela, setTela, onLogout }) {
  return (
    <nav className="navbar-auth">
      <div className="navbar-container">
        <h1>Calculadora de IMC</h1>
        <div className="navbar-right">
          <button
            className={`nav-btn ${tela === 'calculadora' ? 'active' : ''}`}
            onClick={() => setTela('calculadora')}
          >
            Calculadora
          </button>
          <button
            className={`nav-btn ${tela === 'usuarios' ? 'active' : ''}`}
            onClick={() => setTela('usuarios')}
          >
            Usuários
          </button>
          <span className="user-name">Olá, {usuarioLogado.nome}</span>
          <button className="logout-btn" onClick={onLogout}>
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAuth;