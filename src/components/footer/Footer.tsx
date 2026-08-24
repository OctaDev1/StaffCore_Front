import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b1a29] border-t border-[#1a3045] pt-10 pb-12 px-10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        
        {/* Esquerda: Sitemap */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h5 className="text-white font-bold mb-1">Staff Core</h5>
          <a href="#" className="text-[#a3b8cc] hover:text-[#5cc7d9] text-sm transition-colors">Termos de Uso</a>
          <a href="#" className="text-[#a3b8cc] hover:text-[#5cc7d9] text-sm transition-colors">Política de Privacidade</a>
        </div>

        {/* Centro: Créditos */}
        <div className="text-center">
          <p className="text-[#a3b8cc] text-sm">
            Desenvolvido por <span className="text-white font-bold">OctaDev</span>
          </p>
        </div>

        {/* Direita: Redes Sociais e Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-5 text-[#a3b8cc]">
            {/* Facebook */}
            <a href="#" className="hover:text-[#5cc7d9] transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="hover:text-[#5cc7d9] transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-[#5cc7d9] transition-colors">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="hover:text-[#5cc7d9] transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0b1a29"></polygon>
              </svg>
            </a>
          </div>
          <p className="text-[#a3b8cc] text-sm">
            © 2026 OctaDev
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;