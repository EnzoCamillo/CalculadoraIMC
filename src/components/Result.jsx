import React from 'react';
import './Result.css';

const Result = ({ imc, categoria }) => {
  if (!imc || !categoria) {
    return null;
  }

  const getCategoriaClass = (categoria) => {
    switch (categoria) {
      case 'Abaixo do peso':
        return 'categoria-baixo';
      case 'Peso normal':
        return 'categoria-normal';
      case 'Sobrepeso':
        return 'categoria-sobrepeso';
      case 'Obesidade':
        return 'categoria-obesidade';
      default:
        return 'categoria-default';
    }
  };

  const getImcIcon = (categoria) => {
    switch (categoria) {
      case 'Abaixo do peso':
        return '⚖️';
      case 'Peso normal':
        return '✅';
      case 'Sobrepeso':
        return '⚠️';
      case 'Obesidade':
        return '🚨';
      default:
        return '📊';
    }
  };

  return (
    <div className="result-container">
      <div className="result-card">
        <div className="result-header">
          <h2 className="result-title">Resultado do IMC</h2>
        </div>
        
        <div className="imc-display">
          <div className="imc-value">
            {imc}
          </div>
          <p className="imc-label">Seu IMC calculado</p>
        </div>
        
        <div className={`categoria-display ${getCategoriaClass(categoria)}`}>
          <div className="categoria-icon">
            {getImcIcon(categoria)}
          </div>
          <div className="categoria-text">
            {categoria}
          </div>
        </div>
        
        <div className="reference-table">
          <h3 className="table-title">Tabela de Referência:</h3>
          <ul className="table-list">
            <li className="table-item">• Abaixo de 18.5: Abaixo do peso</li>
            <li className="table-item">• 18.5 a 24.9: Peso normal</li>
            <li className="table-item">• 25.0 a 29.9: Sobrepeso</li>
            <li className="table-item">• 30.0 ou mais: Obesidade</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Result;