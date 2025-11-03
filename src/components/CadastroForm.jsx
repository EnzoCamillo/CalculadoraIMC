import React, { useState } from 'react';
import './CadastroForm.css';

function CadastroForm({ onCadastro, onVoltar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem');
      return;
    }

    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    onCadastro({ nome, email, senha });
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <div className="cadastro-form">
      <h2>Cadastro</h2>
      
      {erro && <div className="error-message">{erro}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome completo"
          />
        </div>

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
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <div className="form-group">
          <label>Confirmar Senha</label>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Digite a senha novamente"
          />
        </div>

        <button type="submit" className="btn-primary">
          Cadastrar
        </button>

        <button type="button" className="btn-secondary" onClick={onVoltar}>
          Voltar
        </button>
      </form>
    </div>
  );
}

export default CadastroForm;