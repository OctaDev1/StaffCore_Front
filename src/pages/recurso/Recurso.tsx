import React from 'react';
import { Link } from 'react-router-dom';

// Tipagem para as funcionalidades
interface Funcionalidade {
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
}

const Recurso: React.FC = () => {
  // Lista de recursos do sistema Staff Core
  const funcionalidades: Funcionalidade[] = [
    {
      titulo: 'Automação de Folha',
      descricao: 'Diga adeus aos cálculos manuais. Nosso sistema automatiza descontos, horas extras e impostos, reduzindo erros a zero e integrando com a contabilidade.',
      icone: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
    },
    {
      titulo: 'Gestão de Ponto Eletrônico',
      descricao: 'Controle de jornada completo através de biometria facial, aplicativo mobile e geolocalização. Sincronização em tempo real com o banco de horas.',
      icone: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    },
    {
      titulo: 'Recrutamento Inteligente (ATS)',
      descricao: 'Centralize vagas, currículos e triagens. Use inteligência para filtrar candidatos, agendar entrevistas e montar um banco de talentos poderoso.',
      icone: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    },
    {
      titulo: 'Avaliação de Desempenho',
      descricao: 'Crie ciclos de feedback 360º, defina OKRs (Metas) e acompanhe o desenvolvimento individual de cada colaborador com relatórios visuais.',
      icone: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    },
    {
      titulo: 'Portal do Colaborador',
      descricao: 'Empodere sua equipe com um ambiente exclusivo para baixar holerites, solicitar férias, enviar atestados e visualizar comunicados da empresa.',
      icone: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    },
    {
      titulo: 'People Analytics',
      descricao: 'Tome decisões baseadas em dados. Dashboards customizáveis sobre turnover, absenteísmo, custos com pessoal e diversidade na empresa.',
      icone: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
    }
  ];

  return (
    <div className="bg-[#0b1a29] min-h-screen pt-12 pb-24 px-6 md:px-10 text-white font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* === CABEÇALHO === */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tudo o que o seu RH precisa <br className="hidden md:block" /> em um só lugar
          </h1>
          <p className="text-lg text-[#a3b8cc] max-w-3xl mx-auto font-light leading-relaxed">
            O <strong className="text-white">Staff Core</strong> é mais do que um software, é o motor centralizador da sua gestão. 
            Ferramentas inteligentes projetadas para simplificar, automatizar e elevar a gestão de pessoas da sua empresa ao próximo nível.
          </p>
        </div>

        {/* === CARROSSEL (MOBILE) / GRID (DESKTOP) DE RECURSOS === */}
        <div className="flex w-full overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 snap-x snap-mandatory pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {funcionalidades.map((item, index) => (
            <div 
              key={index} 
              // Adicionado h-[340px] para fixar o tamanho de todos os cards
              className="shrink-0 w-[85%] sm:w-[45%] md:w-auto snap-start bg-[#10263a] p-8 rounded-2xl border border-[#1a3045] hover:border-[#5cc7d9]/50 hover:shadow-[0_0_20px_rgba(92,199,217,0.1)] transition-all duration-300 group flex flex-col h-[340px]"
            >
              {/* Ícone */}
              <div className="w-14 h-14 mb-6 shrink-0 border border-[#1a3045] rounded-xl bg-[#0b1a29] flex items-center justify-center text-[#5cc7d9] group-hover:scale-110 group-hover:bg-[#5cc7d9] group-hover:text-[#0b1a29] transition-all duration-300">
                {item.icone}
              </div>
              
              {/* Textos */}
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#5cc7d9] transition-colors">{item.titulo}</h3>
              <p className="text-[#a3b8cc] leading-relaxed text-sm">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* === CALL TO ACTION (CHAMADA) === */}
        <div className="bg-gradient-to-r from-[#10263a] to-[#0b1a29] rounded-3xl border border-[#1a3045] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Elementos decorativos de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5cc7d9]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5cc7d9]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua gestão?</h2>
            <p className="text-[#a3b8cc] mb-10 max-w-2xl mx-auto text-lg">
              Deixe as planilhas no passado. Junte-se a empresas inovadoras e descubra como o Staff Core pode otimizar a rotina do seu departamento pessoal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/dashboard" 
                className="bg-[#5cc7d9] text-[#0b1a29] px-8 py-4 rounded-lg font-bold hover:bg-[#4eb3c4] transition-all shadow-[0_0_15px_rgba(92,199,217,0.3)] hover:shadow-[0_0_25px_rgba(92,199,217,0.5)] w-full sm:w-auto"
              >
                Acessar Dashboard
              </Link>
              <Link 
                to="/suporte" 
                className="bg-transparent border border-[#5cc7d9] text-[#5cc7d9] px-8 py-4 rounded-lg font-bold hover:bg-[#1a3045] transition-all w-full sm:w-auto"
              >
                Falar com Consultor
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recurso; 