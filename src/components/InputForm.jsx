import { useState } from 'react';
import './inputForm.css';

function InputForm({ onCalcular, onLimpar }) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  // Máscara automática para o peso (formato: 00.0 ou 000.0)
  const maskPeso = (valor) => {
    valor = valor.replace(/\D/g, ''); // remove tudo que não for número
    if (valor.length > 4) valor = valor.substring(0, 4); // limita a 4 dígitos
    
    if (valor.length === 4) {
      return `${valor.substring(0, 3)}.${valor.substring(3)}`;
    } else if (valor.length === 3) {
      return `${valor.substring(0, 2)}.${valor.substring(2)}`;
    } else if (valor.length === 2) {
      return `${valor.substring(0, 2)}`;
    } else {
      return valor;
    }
  };

  // Máscara automática para a altura (formato: 0.00)
  const maskAltura = (valor) => {
    valor = valor.replace(/\D/g, ''); // remove tudo que não for número
    if (valor.length > 3) valor = valor.substring(0, 3); // limita a 3 dígitos
    
    if (valor.length === 3) {
      return `${valor[0]}.${valor.substring(1)}`;
    } else if (valor.length === 2) {
      return `${valor[0]}.${valor[1]}`;
    } else {
      return valor;
    }
  };

  const handlePesoChange = (e) => {
    const valorFormatado = maskPeso(e.target.value);
    setPeso(valorFormatado);
  };

  const handleAlturaChange = (e) => {
    const valorFormatado = maskAltura(e.target.value);
    setAltura(valorFormatado);
  };

  const handleSubmit = () => {
    if (peso && altura) {
      onCalcular(peso, altura);
    }
  };

  const handleReset = () => {
    setPeso('');
    setAltura('');
    onLimpar();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-form-container">
      <h1 className="input-form-title">Calculadora de IMC</h1>
      <p className="input-form-subtitle">Índice de Massa Corporal</p>

      <div className="input-form">
        <div className="form-group">
          <label htmlFor="peso" className="form-label">Peso (kg)</label>
          <input
            id="peso"
            type="text"
            value={peso}
            onChange={handlePesoChange}
            onKeyPress={handleKeyPress}
            placeholder="Ex: 70.5"
            className="form-input"
            maxLength="5"
          />
          <span className="input-hint">Formato: 00.0 (máx. 999.9 kg)</span>
        </div>

        <div className="form-group">
          <label htmlFor="altura" className="form-label">Altura (m)</label>
          <input
            id="altura"
            type="text"
            value={altura}
            onChange={handleAlturaChange}
            onKeyPress={handleKeyPress}
            placeholder="Ex: 1.75"
            className="form-input"
            maxLength="4"
          />
          <span className="input-hint">Formato: 0.00 (máx. 9.99 m)</span>
        </div>

        <div className="button-group">
          <button onClick={handleSubmit} className="btn-submit">
            Calcular IMC
          </button>
          <button onClick={handleReset} className="btn-reset">
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
