import React from 'react';
import '../App.css';
import { 
  Stethoscope, 
  Scissors, 
  Syringe, 
  HeartPulse, 
} from 'lucide-react';

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

  export default Services;