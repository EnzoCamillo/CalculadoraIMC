import React from 'react';
import './InputForm.css';

function InputForm({ weight, setWeight, height, setHeight, calcImc }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight && height) {
      calcImc();
    }
  };

  return (
    <div className="input-form">
      <h2>Calcular IMC</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Peso (kg)</label>
          <input
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex: 70.5"
          />
        </div>

        <div className="form-group">
          <label>Altura (m)</label>
          <input
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Ex: 1.75"
          />
        </div>

        <button type="submit" className="btn-primary">
          Calcular
        </button>
      </form>
    </div>
  );
}

export default InputForm;