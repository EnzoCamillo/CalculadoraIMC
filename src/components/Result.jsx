import './result.css';

function Result({ resultado }) {
  return (
    <div className="result-container">
      <div className={`result-card result-${resultado.cor}`}>
        <h2 className="result-title">Seu Resultado</h2>
        <div className="result-value">
          <span className="result-imc">{resultado.imc}</span>
          <span className="result-classification">
            {resultado.classificacao}
            {resultado.grau && <span className="result-degree"> - {resultado.grau}</span>}
          </span>
        </div>
        <p className="result-recommendation">{resultado.recomendacao}</p>
      </div>


    </div>
  );
}

export default Result;