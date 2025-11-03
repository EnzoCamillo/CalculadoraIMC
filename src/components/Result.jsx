import React from 'react';
import './Result.css';

function Result({ imc, info, infoClass, resetCalc }) {
  return (
    <div className="result">
      <h2>Resultado</h2>
      
      <div className="result-content">
        <div className="imc-value">{imc}</div>
        <div className={`imc-info ${infoClass}`}>{info}</div>
      </div>

      <div className="imc-table">
        <h3>Classificação do IMC:</h3>
        <ul>
          <li>Abaixo de 18.5: Abaixo do peso</li>
          <li>18.5 - 24.9: Peso ideal</li>
          <li>25.0 - 29.9: Levemente acima do peso</li>
          <li>30.0 - 34.9: Obesidade grau I</li>
          <li>35.0 - 39.9: Obesidade grau II</li>
          <li>Acima de 40: Obesidade grau III</li>
        </ul>
      </div>

      <button className="btn-primary" onClick={resetCalc}>
        Calcular Novamente
      </button>
    </div>
  );
}

export default Result;