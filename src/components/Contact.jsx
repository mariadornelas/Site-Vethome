import React from 'react';
import '../App.css';
import { 
  Phone, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

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
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--brand-navy)' }}>Nome do Pet</label>
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

export default Contact;