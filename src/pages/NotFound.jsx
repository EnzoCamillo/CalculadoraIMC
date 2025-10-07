import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="error-icon">⚠️</div>
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Página Não Encontrada</h2>
        <p className="error-description">
          Oops! A página que você está procurando não existe ou foi removida.
        </p>
        <Link to="/" className="btn-home">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;