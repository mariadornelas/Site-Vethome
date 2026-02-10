import React from 'react';
import '../App.css';
import {
    PawPrint,
} from 'lucide-react';

const Footer = () => (
    <footer className="footer">
        <div className="footer-grid">
            <div>
                <div className="logo" style={{ color: 'white', marginBottom: '1rem' }}>
                    <PawPrint /> VetHome
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

export default Footer;