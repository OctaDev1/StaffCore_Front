import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // <-- Importamos aqui

const Navbar = () => {
  // Cores extraídas da imagem
  const deepTealBackground = '#0b1a29'; 
  const brightCyanAccent = '#5cc7d9';     
  const darkTealBorder = '#1a3045';      
  const lightTealText = '#a3b8cc';       

  // Descobre em qual página estamos no momento
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center py-6 px-10 border-b shadow-md" style={{ backgroundColor: deepTealBackground, borderColor: darkTealBorder }}>
      
      {/* Logo e Nome */}
      <Link to="/" className="flex items-center gap-3 cursor-pointer">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20 L20 80 L80 80 Z" stroke={brightCyanAccent} strokeWidth="4" fill="none" />
          <line x1="50" y1="20" x2="50" y2="55" stroke={brightCyanAccent} strokeWidth="4" />
          <line x1="20" y1="80" x2="50" y2="55" stroke={brightCyanAccent} strokeWidth="4" />
          <line x1="80" y1="80" x2="50" y2="55" stroke={brightCyanAccent} strokeWidth="4" />
          <circle cx="50" cy="20" r="8" fill={brightCyanAccent} />
          <circle cx="20" cy="80" r="8" fill={brightCyanAccent} />
          <circle cx="80" cy="80" r="8" fill={brightCyanAccent} />
          <circle cx="50" cy="55" r="14" fill={brightCyanAccent} />
        </svg>
        <span className="text-2xl font-bold tracking-wide" style={{ color: brightCyanAccent }}>Staff Core</span>
      </Link>

      {/* Links de Navegação */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        
        {/* Link para a Home */}
        <Link 
          to="/" 
          className={`pb-1 transition-colors ${location.pathname === '/' ? 'border-b-2' : 'hover:text-white'}`} 
          style={{ 
            color: location.pathname === '/' ? brightCyanAccent : lightTealText, 
            borderColor: brightCyanAccent 
          }}
        >
          Home
        </Link>
        
        <Link to="/#recursos" className="transition-colors hover:text-white" style={{ color: lightTealText }}>Recursos</Link>
        
        {/* Link para a página Sobre */}
        <Link 
          to="/sobre" 
          className={`pb-1 transition-colors ${location.pathname === '/sobre' ? 'border-b-2' : 'hover:text-white'}`} 
          style={{ 
            color: location.pathname === '/sobre' ? brightCyanAccent : lightTealText, 
            borderColor: brightCyanAccent 
          }}
        >
          Quem Somos
        </Link>
        
        <Link to="/#suporte" className="transition-colors hover:text-white" style={{ color: lightTealText }}>Suporte</Link>
        
        {/* Botão de Login */}
        <button className="border-2 px-5 py-2 rounded-md transition-all font-bold bg-transparent" style={{ color: brightCyanAccent, borderColor: brightCyanAccent }}>
          Login
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;