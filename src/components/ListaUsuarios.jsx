import React from 'react';
import './ListaUsuarios.css';

function ListaUsuarios({ usuarios, usuarioAtual }) {
  return (
    <div className="lista-usuarios">
      <h2>Usuários Cadastrados</h2>
      
      {usuarios.length === 0 ? (
        <p className="empty-message">Nenhum usuário cadastrado</p>
      ) : (
        <div className="usuarios-list">
          {usuarios.map((usuario, index) => (
            <div
              key={index}
              className={`usuario-card ${
                usuario.email === usuarioAtual.email ? 'current-user' : ''
              }`}
            >
              <div className="usuario-info">
                <p className="usuario-nome">{usuario.nome}</p>
                <p className="usuario-email">{usuario.email}</p>
              </div>
              {usuario.email === usuarioAtual.email && (
                <span className="badge">Você</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaUsuarios;