import React from 'react';
import '../App.css';

const Home = () => (
    <header id="home" className="hero">
        <div className="hero-content">
            <h1>Seu pet merece o <span style={{ color: 'var(--brand-blue)' }}>melhor cuidado</span> do mundo.</h1>
            <p>
                Atendimento veterinário com carinho, tecnologia e especialistas apaixonados pelo que fazem.
            </p>
            <a href="#contact" className="btn-primary">
                Agendar Consulta
            </a>
        </div>
        <div className="hero-image-container">
            <img
                src="https://img.freepik.com/fotos-premium/gato-e-cachorro-juntos-na-frente-de-fundo-branco_191971-29522.jpg"
                alt="Cachorro feliz"
                className="hero-img"
            />
        </div>
    </header>
);

export default Home;