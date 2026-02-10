import React from 'react';
import '../App.css';
import { 
  PawPrint,
} from 'lucide-react';

const Navbar = () => (
    <nav className="navbar">
        <div className="logo">
            <PawPrint size={28} strokeWidth={2.5} />
            <span>VetHome</span>
        </div>
        <div className="nav-links">
            <a href="#home">Início</a>
            <a href="#services">Especialidades</a>
            <a href="#about">A Clínica</a>
            <a href="#contact">Agendar</a>
        </div>
    </nav>
);

export default Navbar;