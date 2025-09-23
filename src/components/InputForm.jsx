import React from 'react';
import './InputForm.css';

const InputForm = ({ peso, altura, setPeso, setAltura, calcularIMC }) => {
  const handleCalcular = () => {
    calcularIMC();
  };

  const formatarPeso = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    
    if (apenasNumeros.length === 0) return '';
    
    if (apenasNumeros.length >= 3) {
      const inteiro = apenasNumeros.slice(0, -1);
      const decimal = apenasNumeros.slice(-1);
      return `${inteiro},${decimal}`;
    }
    
    return apenasNumeros;
  };

  const formatarAltura = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    
    if (apenasNumeros.length === 0) return '';
    
    if (apenasNumeros.length >= 2) {
      const inteiro = apenasNumeros.charAt(0);
      const decimal = apenasNumeros.slice(1, 3);
      return `${inteiro},${decimal}`;
    }
    
    return apenasNumeros;
  };

  const converterParaNumero = (valorFormatado) => {
    return valorFormatado.replace(',', '.');
  };

  const handlePesoChange = (e) => {
    const valorDigitado = e.target.value;
    const valorFormatado = formatarPeso(valorDigitado);
    
    setPeso(converterParaNumero(valorFormatado));
  };

  const handleAlturaChange = (e) => {
    const valorDigitado = e.target.value;
    const valorFormatado = formatarAltura(valorDigitado);
    
    setAltura(converterParaNumero(valorFormatado));
  };

  const exibirPeso = () => {
    if (!peso) return '';
    return peso.toString().replace('.', ',');
  };

  const exibirAltura = () => {
    if (!altura) return '';
    return altura.toString().replace('.', ',');
  };

  return (
    <div className="input-form">
      <div className="form-container">
        <div className="input-group">
          <label className="input-label">
            Peso (kg)
          </label>
          <input
            type="text"
            value={exibirPeso()}
            onChange={handlePesoChange}
            placeholder="Ex: 70,5"
            maxLength="5"
            className="input-field"
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">
            Altura (m)
          </label>
          <input
            type="text"
            value={exibirAltura()}
            onChange={handleAlturaChange}
            placeholder="Ex: 1,75"
            maxLength="4"
            className="input-field"
          />
        </div>
        
        <button 
          onClick={handleCalcular}
          className="calculate-button"
        >
          Calcular IMC
        </button>
      </div>
    </div>
  );
};

export default InputForm;