import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Bem-vindo à TechFit Solutions</h1>
        <p className="hero-subtitle">
          Sua plataforma completa para cuidar da saúde e bem-estar
        </p>
        <p className="hero-description">
          Oferecemos ferramentas inteligentes para você monitorar sua saúde de forma prática e eficiente.
        </p>
        <a href="/imc" className="cta-button">Calcular IMC</a>
      </div>
    </div>
  );
}

export default Home;