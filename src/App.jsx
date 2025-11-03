import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NavbarAuth from './components/NavbarAuth';
import InputForm from './components/InputForm';
import Result from './components/Result';
import LoginForm from './components/LoginForm';
import CadastroForm from './components/CadastroForm';
import ListaUsuarios from './components/ListaUsuarios';
import './app.css';

function App() {
  // Estados de autenticação
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [telaAtual, setTelaAtual] = useState('login');

  // Estados da calculadora IMC
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);
  const [info, setInfo] = useState('');
  const [infoClass, setInfoClass] = useState('');

  // Carregar usuários do localStorage
  useEffect(() => {
    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios') || '[]');
    setUsuarios(usuariosStorage);
  }, []);

  // Função de cadastro
  const handleCadastro = (novoUsuario) => {
    const usuarioExiste = usuarios.find(u => u.email === novoUsuario.email);
    
    if (usuarioExiste) {
      alert('Este email já está cadastrado!');
      return;
    }

    const usuariosAtualizados = [...usuarios, novoUsuario];
    setUsuarios(usuariosAtualizados);
    localStorage.setItem('usuarios', JSON.stringify(usuariosAtualizados));
    
    alert('Cadastro realizado com sucesso!');
    setTelaAtual('login');
  };

  // Função de login
  const handleLogin = (credenciais) => {
    const usuario = usuarios.find(
      u => u.email === credenciais.email && u.senha === credenciais.senha
    );

    if (usuario) {
      setUsuarioLogado(usuario);
      setTelaAtual('calculadora');
      return true;
    }
    return false;
  };

  // Função de logout
  const handleLogout = () => {
    setUsuarioLogado(null);
    setTelaAtual('login');
    setWeight('');
    setHeight('');
    setImc(null);
    setInfo('');
  };

  // Função para calcular IMC
  const calcImc = () => {
    const heightFloat = parseFloat(height);
    const weightFloat = parseFloat(weight);
    const resultado = (weightFloat / (heightFloat * heightFloat)).toFixed(2);
    setImc(resultado);
    infoImc();
  };

  // Função para classificar IMC
  const infoImc = () => {
    if (imc < 18.5) {
      setInfo("Abaixo do peso");
      setInfoClass("medium");
    } else if (imc >= 18.5 && imc < 25) {
      setInfo("Peso ideal");
      setInfoClass("good");
    } else if (imc >= 25 && imc < 30) {
      setInfo("Levemente acima do peso");
      setInfoClass("medium");
    } else if (imc >= 30 && imc < 35) {
      setInfo("Obesidade grau I");
      setInfoClass("bad");
    } else if (imc >= 35 && imc < 40) {
      setInfo("Obesidade grau II");
      setInfoClass("bad");
    } else {
      setInfo("Obesidade grau III");
      setInfoClass("bad");
    }
  };

  // Função para resetar
  const resetCalc = () => {
    setImc(null);
    setInfo('');
    setInfoClass('');
    setHeight('');
    setWeight('');
  };

  return (
    <div className="App">
      {!usuarioLogado ? (
        <>
          <Navbar />
          <div className="container">
            {telaAtual === 'login' && (
              <LoginForm
                onLogin={handleLogin}
                onIrParaCadastro={() => setTelaAtual('cadastro')}
              />
            )}

            {telaAtual === 'cadastro' && (
              <CadastroForm
                onCadastro={handleCadastro}
                onVoltar={() => setTelaAtual('login')}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <NavbarAuth
            usuarioLogado={usuarioLogado}
            tela={telaAtual}
            setTela={setTelaAtual}
            onLogout={handleLogout}
          />

          <div className="container">
            {telaAtual === 'calculadora' && (
              <>
                <div className="usuario-info-box">
                  <p>Usuário logado: <strong>{usuarioLogado.nome}</strong></p>
                </div>

                {!imc ? (
                  <InputForm
                    weight={weight}
                    setWeight={setWeight}
                    height={height}
                    setHeight={setHeight}
                    calcImc={calcImc}
                  />
                ) : (
                  <Result
                    imc={imc}
                    info={info}
                    infoClass={infoClass}
                    resetCalc={resetCalc}
                  />
                )}
              </>
            )}

            {telaAtual === 'usuarios' && (
              <ListaUsuarios
                usuarios={usuarios}
                usuarioAtual={usuarioLogado}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;