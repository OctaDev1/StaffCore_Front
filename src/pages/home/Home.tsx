import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#0b1a29] text-white font-sans overflow-x-hidden">
      
      {/* === CONTEÚDO PRINCIPAL === */}
      <div className="pt-12 pb-24 px-10 max-w-7xl mx-auto">
        
        {/* === HERO SECTION === */}
        <section id="inicio" className="grid md:grid-cols-2 gap-12 items-center mb-32 pt-8">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Maximize Sua <br /> Eficiência em RH
            </h1>
            <p className="text-xl text-[#5cc7d9] mb-10 font-light">
              O motor centralizador da sua gestão de RH.
            </p>
            <button className="bg-[#5cc7d9] text-[#0b1a29] px-8 py-3 rounded font-bold hover:bg-[#4eb3c4] transition-colors shadow-[0_0_15px_rgba(92,199,217,0.3)] w-full md:w-auto">
              Solicitar Demonstração
            </button>
          </div>

          <div className="relative h-96 bg-[#10263a] rounded-2xl border border-[#1a3045] shadow-2xl overflow-hidden flex items-center justify-center p-6">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-gray-500/50"></div>
              <div className="h-3 w-3 rounded-full bg-gray-500/50"></div>
              <div className="h-3 w-3 rounded-full bg-gray-500/50"></div>
            </div>
            
            <div className="relative w-full h-full flex items-center justify-center">
               <div className="absolute w-64 h-64 border border-[#5cc7d9]/20 rounded-full animate-pulse"></div>
               <div className="absolute w-48 h-48 border border-[#5cc7d9]/40 rounded-full"></div>
               <div className="w-16 h-16 bg-[#5cc7d9] rounded-full shadow-[0_0_30px_#5cc7d9] z-10"></div>
               
               <div className="absolute top-10 right-10 bg-[#0b1a29] border border-[#1a3045] p-3 rounded-lg w-32 hidden sm:block">
                 <div className="h-2 w-full bg-[#1a3045] rounded mb-2"></div>
                 <div className="h-2 w-2/3 bg-[#5cc7d9] rounded"></div>
               </div>
               <div className="absolute bottom-10 left-10 bg-[#0b1a29] border border-[#1a3045] p-3 rounded-lg w-40 gap-2 items-end h-20 hidden sm:flex">
                 <div className="w-4 bg-[#1a3045] h-1/2 rounded-t"></div>
                 <div className="w-4 bg-[#5cc7d9] h-full rounded-t"></div>
                 <div className="w-4 bg-[#1a3045] h-3/4 rounded-t"></div>
               </div>
            </div>
          </div>
        </section>

        {/* === RECURSOS PRINCIPAIS === */}
        <section id="recursos" className="mb-32">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Recursos Principais</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-[#10263a] p-8 rounded-xl border border-[#1a3045] hover:border-[#5cc7d9]/50 transition-colors">
              <div className="w-12 h-12 mb-6 border border-[#1a3045] rounded bg-[#0b1a29] flex items-center justify-center text-[#5cc7d9]">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Automação de Folha</h3>
              <p className="text-sm text-[#a3b8cc] leading-relaxed">
                Automação de folha completa e otimização inteligente para sua equipe.
              </p>
            </div>

            <div className="bg-[#10263a] p-8 rounded-xl border border-[#1a3045] hover:border-[#5cc7d9]/50 transition-colors">
              <div className="w-12 h-12 mb-6 border border-[#1a3045] rounded bg-[#0b1a29] flex items-center justify-center text-[#5cc7d9]">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Gestão de Ponto</h3>
              <p className="text-sm text-[#a3b8cc] leading-relaxed">
                Gestão conectando dados em um sistema de visão diária simplificada.
              </p>
            </div>

            <div className="bg-[#10263a] p-8 rounded-xl border border-[#1a3045] hover:border-[#5cc7d9]/50 transition-colors">
              <div className="w-12 h-12 mb-6 border border-[#1a3045] rounded bg-[#0b1a29] flex items-center justify-center text-[#5cc7d9]">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Recrutamento</h3>
              <p className="text-sm text-[#a3b8cc] leading-relaxed">
                Rastreamento avançado conectado com trabalho remoto e múltiplos canais.
              </p>
            </div>

          </div>
        </section>

        {/* === DEPOIMENTOS === */}
        <section id="depoimentos">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Depoimentos</h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-5xl mx-auto md:mx-0">
            <button className="hidden sm:flex w-10 h-10 rounded-full bg-[#10263a] items-center justify-center border border-[#1a3045] hover:bg-[#1a3045] text-[#a3b8cc] transition-colors shrink-0">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            <div className="bg-[#10263a] p-8 rounded-xl border border-[#1a3045] flex flex-col md:flex-row items-center gap-8 w-full text-center md:text-left">
              <img 
                src="https://i0.wp.com/cromossomonerd.com.br/wp-content/uploads/2017/03/destaque_homem_aranha.png?fit=1068%2C600" 
                alt="Foto de perfil de Peter Parker" 
                className="w-32 h-32 rounded-full md:rounded-lg object-cover shadow-lg shrink-0"
              />
              
              <div className="flex-1">
                <p className="italic text-[#a3b8cc] mb-6 text-lg leading-relaxed">
                  “Equipe muito profissional e atenciosa. A StaffCore tornou nosso processo de contratação mais rápido, simples e eficiente!”
                </p>
                <h4 className="font-bold text-white text-lg">Peter Parker</h4>
                <span className="text-sm text-[#5cc7d9]">SpiderTech</span>
              </div>
            </div>

            <div className="flex sm:hidden gap-4 mt-4">
              <button className="w-12 h-12 rounded-full bg-[#10263a] flex items-center justify-center border border-[#1a3045] hover:bg-[#1a3045] text-[#a3b8cc] transition-colors">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-[#10263a] flex items-center justify-center border border-[#1a3045] hover:bg-[#1a3045] text-[#a3b8cc] transition-colors">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

            <button className="hidden sm:flex w-10 h-10 rounded-full bg-[#10263a] items-center justify-center border border-[#1a3045] hover:bg-[#1a3045] text-[#a3b8cc] transition-colors shrink-0">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;