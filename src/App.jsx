import React from 'react';
import './App.css';
import { 
  Stethoscope, 
  Scissors, 
  Syringe, 
  HeartPulse, 
  Phone, 
  MapPin, 
  Clock, 
  PawPrint,
  ArrowRight
} from 'lucide-react';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <PawPrint size={28} strokeWidth={2.5} />
      <span>VetCare</span>
    </div>
    <div className="nav-links">
      <a href="#home">Início</a>
      <a href="#services">Especialidades</a>
      <a href="#about">A Clínica</a>
      <a href="#contact">Agendar</a>
    </div>
  </nav>
);

const Hero = () => (
  <header id="home" className="hero">
    <div className="hero-content">
      <h1>Seu pet merece o <span style={{color: 'var(--brand-blue)'}}>melhor cuidado</span> do mundo.</h1>
      <p>
        Atendimento veterinário com carinho, tecnologia e especialistas apaixonados pelo que fazem.
      </p>
      <a href="#contact" className="btn-primary">
        Agendar Consulta
      </a>
    </div>
    <div className="hero-image-container">
      {/* Imagem de um cachorro feliz */}
      <img 
        src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80" 
        alt="Cachorro feliz" 
        className="hero-img"
      />
    </div>
  </header>
);

const Services = () => {
  const servicesList = [
    {
      icon: <Stethoscope size={32} />,
      title: "Clínica Geral",
      desc: "Diagnósticos precisos e check-ups completos para prevenção."
    },
    {
      icon: <Scissors size={32} />,
      title: "Estética Animal",
      desc: "Banhos terapêuticos e tosa higiênica com produtos premium."
    },
    {
      icon: <Syringe size={32} />,
      title: "Vacinação",
      desc: "Controle rigoroso de imunização para cães e gatos."
    },
    {
      icon: <HeartPulse size={32} />,
      title: "Cardiologia",
      desc: "Cuidados especiais para o coração do seu melhor amigo."
    }
  ];

  return (
    <section id="services" className="section section-bg-light">
      <h2 className="section-title">Nossas Especialidades</h2>
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-box">{service.icon}</div>
            <h3>{service.title}</h3>
            <p style={{color: '#666', fontSize: '0.95rem'}}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="section">
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
      
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--brand-navy)' }}>Vamos conversar?</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Estamos prontos para atender seu pet com todo amor. Mande uma mensagem ou visite nossa unidade.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="icon-box" style={{ width: '40px', height: '40px', marginBottom: 0 }}>
              <Phone size={20} />
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--brand-navy)' }}>Ligue para nós</strong>
              <span style={{ color: '#555' }}>(11) 99999-9999</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="icon-box" style={{ width: '40px', height: '40px', marginBottom: 0 }}>
              <MapPin size={20} />
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--brand-navy)' }}>Localização</strong>
              <span style={{ color: '#555' }}>Av. dos Bichos, 123 - Centro</span>
            </div>
          </div>
        </div>
      </div>

      <form style={{ 
        flex: 1, 
        minWidth: '300px', 
        background: 'var(--white)', 
        padding: '2rem', 
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        border: '1px solid var(--brand-ice)'
      }} onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--brand-navy)' }}>Nome do Tutor</label>
          <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: '#fcfcfc' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--brand-navy)' }}>Telefone</label>
          <input type="tel" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: '#fcfcfc' }} />
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
          Agendar Agora <ArrowRight size={20} />
        </button>
      </form>

    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div>
        <div className="logo" style={{ color: 'white', marginBottom: '1rem' }}>
          <PawPrint /> VetCare
        </div>
        <p style={{ opacity: 0.8 }}>Cuidando com amor desde 2010.</p>
      </div>
      <div>
        <h4>Links Rápidos</h4>
        <ul>
          <li>Sobre nós</li>
          <li>Equipe</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <h4>Horários</h4>
        <ul>
          <li>Seg - Sex: 08h às 20h</li>
          <li>Sábado: 09h às 14h</li>
          <li>Domingo: Plantão</li>
        </ul>
      </div>
    </div>
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
      © 2024 VetCare. Todos os direitos reservados.
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;