import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  // Estado para controlar o menu no mobile
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Cores extraídas da imagem
  const deepTealBackground = '#0b1a29'; 
  const brightCyanAccent = '#5cc7d9';     
  const darkTealBorder = '#1a3045';      
  const lightTealText = '#a3b8cc';       

  // Descobre em qual página estamos no momento
  const location = useLocation();

  // Função para fechar o menu mobile ao clicar em um link
  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <nav className="relative z-50 border-b shadow-md" style={{ backgroundColor: deepTealBackground, borderColor: darkTealBorder }}>
      <div className="flex justify-between items-center py-6 px-10">
        
        {/* Logo e Nome */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={closeMenu}>
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

        {/* Links de Navegação (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link 
            to="/" 
            className={`pb-1 transition-colors ${location.pathname === '/' ? 'border-b-2' : 'hover:text-white'}`} 
            style={{ color: location.pathname === '/' ? brightCyanAccent : lightTealText, borderColor: brightCyanAccent }}
          >
            Home
          </Link>
          
          <Link 
            to="/recursos" 
            className={`pb-1 transition-colors ${location.pathname === '/recursos' ? 'border-b-2' : 'hover:text-white'}`} 
            style={{ color: location.pathname === '/recursos' ? brightCyanAccent : lightTealText, borderColor: brightCyanAccent }}
          >
            Recursos
          </Link>
          
          <Link 
            to="/sobre" 
            className={`pb-1 transition-colors ${location.pathname === '/sobre' ? 'border-b-2' : 'hover:text-white'}`} 
            style={{ color: location.pathname === '/sobre' ? brightCyanAccent : lightTealText, borderColor: brightCyanAccent }}
          >
            Quem Somos
          </Link>
          
          <Link 
            to="/suporte" 
            className={`pb-1 transition-colors ${location.pathname === '/suporte' ? 'border-b-2' : 'hover:text-white'}`} 
            style={{ color: location.pathname === '/suporte' ? brightCyanAccent : lightTealText, borderColor: brightCyanAccent }}
          >
            Suporte
          </Link>

          <Link
            to="/dashboard"
            className={`pb-1 transition-colors ${location.pathname === '/dashboard' ? 'border-b-2' : 'hover:text-white'}`}
            style={{ color: location.pathname === '/dashboard' ? brightCyanAccent : lightTealText, borderColor: brightCyanAccent }}
          >
            Dashboard
          </Link>
          
          <Link to="/login" className="border-2 px-5 py-2 rounded-md transition-all font-bold bg-transparent hover:bg-[#5cc7d9] hover:text-[#0b1a29]" style={{ color: brightCyanAccent, borderColor: brightCyanAccent }}>
            Login
          </Link>
        </div>

        {/* Botão Menu Hambúrguer (Mobile) */}
        <button 
          className="md:hidden transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          style={{ color: brightCyanAccent }}
        >
          <div className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`}>
            {isMenuOpen ? (
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* Menu Mobile Animado Dropdown */}
      <div 
        className={`md:hidden grid transition-all duration-300 ease-in-out absolute w-full left-0 z-40 ${
          isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        style={{ backgroundColor: deepTealBackground }}
      >
        <div className="overflow-hidden">
          <div className="border-t px-10 py-6 flex flex-col gap-4 shadow-xl" style={{ borderColor: darkTealBorder }}>
            <Link to="/" onClick={closeMenu} className="text-lg transition-colors hover:text-white" style={{ color: location.pathname === '/' ? brightCyanAccent : lightTealText }}>Home</Link>
            
            <Link to="/recursos" onClick={closeMenu} className="text-lg transition-colors hover:text-white" style={{ color: location.pathname === '/recursos' ? brightCyanAccent : lightTealText }}>Recursos</Link>
            
            <Link to="/sobre" onClick={closeMenu} className="text-lg transition-colors hover:text-white" style={{ color: location.pathname === '/sobre' ? brightCyanAccent : lightTealText }}>Quem Somos</Link>
            
            <Link to="/suporte" onClick={closeMenu} className="text-lg transition-colors hover:text-white" style={{ color: location.pathname === '/suporte' ? brightCyanAccent : lightTealText }}>Suporte</Link>
            
            {/* Link do Dashboard corrigido para o padrão mobile */}
            <Link to="/dashboard" onClick={closeMenu} className="text-lg transition-colors hover:text-white" style={{ color: location.pathname === '/dashboard' ? brightCyanAccent : lightTealText }}>Dashboard</Link>
            
            <Link to="/login" onClick={closeMenu} className="border-2 mt-2 px-5 py-3 text-center rounded-md transition-all font-bold bg-transparent hover:bg-[#5cc7d9] hover:text-[#0b1a29]" style={{ color: brightCyanAccent, borderColor: brightCyanAccent }}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;