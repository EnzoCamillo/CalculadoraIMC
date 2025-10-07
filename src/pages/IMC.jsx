import { useState } from 'react';
import InputForm from '../components/InputForm';
import Result from '../components/Result';
import './IMC.css';

function IMC() {
  const [resultado, setResultado] = useState(null);

  const handleCalcular = (peso, altura) => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (pesoNum > 0 && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      let classificacao = '';
      let grau = '';
      let cor = '';
      let recomendacao = '';

      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        grau = '';
        cor = 'azul';
        recomendacao = 'Consulte um nutricionista para ganhar peso de forma saudável.';
      } else if (imc < 25) {
        classificacao = 'Peso normal';
        grau = '';
        cor = 'verde';
        recomendacao = 'Parabéns! Continue mantendo hábitos saudáveis.';
      } else if (imc < 30) {
        classificacao = 'Sobrepeso';
        grau = '';
        cor = 'amarelo';
        recomendacao = 'Considere uma dieta equilibrada e atividades físicas regulares.';
      } else if (imc < 35) {
        classificacao = 'Obesidade';
        grau = 'Grau I';
        cor = 'laranja';
        recomendacao = 'Procure orientação médica e nutricional para perder peso.';
      } else if (imc < 40) {
        classificacao = 'Obesidade';
        grau = 'Grau II';
        cor = 'vermelho';
        recomendacao = 'É importante buscar acompanhamento médico especializado.';
      } else {
        classificacao = 'Obesidade';
        grau = 'Grau III';
        cor = 'vermelho-escuro';
        recomendacao = 'Procure atendimento médico urgente para tratamento adequado.';
      }

      setResultado({ 
        imc: imc.toFixed(2), 
        classificacao, 
        grau,
        cor,
        recomendacao 
      });
    } else {
      alert('Por favor, insira valores válidos para peso e altura.');
    }
  };

  const handleLimpar = () => {
    setResultado(null);
  };

  return (
    <div className="imc-page">
      <InputForm onCalcular={handleCalcular} onLimpar={handleLimpar} />
      {resultado && <Result resultado={resultado} />}
    </div>
  );
}

export default IMC;