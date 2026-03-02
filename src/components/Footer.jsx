import React from 'react';
import '../App.css';
import {
    PawPrint,
} from 'lucide-react';

const Footer = () => (
    <footer className="footer">
        <div className="footer-grid" style={{ display: 'flex', justifyContent: 'center', gap: '20rem', flexWrap: 'wrap' }}>
            <div>
                <div className="logo" style={{ color: 'white', marginBottom: '1rem' }}>
                    <PawPrint /> VetHome
                </div>
                <p style={{ opacity: 0.8 }}>Cuidando com amor desde 2010.</p>
            </div>
            <div>
                <h4>Horários</h4>
                <ul>
                    <li>Seg - Sex: 08h às 20h</li>
                    <li>Sábado: 09h às 14h</li>
                </ul>
            </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
            © 2024 VetCare. Todos os direitos reservados.
        </div>
    </footer>
);

export default Footer;