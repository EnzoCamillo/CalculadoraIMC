import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin, onIrParaCadastro }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }

    const sucesso = onLogin({ email, senha });
    if (!sucesso) {
      setErro('Email ou senha incorretos');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      
      {erro && <div className="error-message">{erro}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
          />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="********"
          />
        </div>

        <button type="submit" className="btn-primary">
          Entrar
        </button>

        <button type="button" className="btn-secondary" onClick={onIrParaCadastro}>
          Criar Conta
        </button>
      </form>
    </div>
  );
}

export default LoginForm;