import React, { useState } from 'react';

const Suporte: React.FC = () => {
  // Estado para simular o comportamento de envio do formulário
  const [statusEnvio, setStatusEnvio] = useState<'ocioso' | 'enviando' | 'sucesso'>('ocioso');

  // Função que lida com o clique no botão de enviar
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusEnvio('enviando');
    
    // Simula um tempo de carregamento de 2 segundos (como se fosse uma API real)
    setTimeout(() => {
      setStatusEnvio('sucesso');
      
      // Volta ao estado normal depois de 3 segundos
      setTimeout(() => setStatusEnvio('ocioso'), 3000);
    }, 2000);
  };

  return (
    <div className="bg-[#0b1a29] min-h-screen pt-8 pb-24 px-6 md:px-10 text-white font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* === CABEÇALHO === */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Como podemos ajudar?</h1>
          <p className="text-lg text-[#a3b8cc] max-w-2xl mx-auto font-light">
            Nossa equipe está pronta para tirar suas dúvidas, resolver problemas técnicos ou ouvir suas sugestões. Preencha o formulário abaixo e retornaremos o mais rápido possível.
          </p>
        </div>

        {/* === CONTEÚDO PRINCIPAL (Grid: Info + Formulário) === */}
        <div className="grid md:grid-cols-5 gap-12 items-start">
          
          {/* Lado Esquerdo: Informações de Contato */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-[#10263a] p-8 rounded-xl border border-[#1a3045]">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-[#1a3045] pb-4">Canais de Atendimento</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0b1a29] border border-[#1a3045] flex items-center justify-center text-[#5cc7d9] shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">E-mail</h4>
                    <p className="text-[#a3b8cc] text-sm mt-1">suporte@staffcore.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0b1a29] border border-[#1a3045] flex items-center justify-center text-[#5cc7d9] shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Telefone</h4>
                    <p className="text-[#a3b8cc] text-sm mt-1">0800 123 4567</p>
                    <p className="text-[#a3b8cc] text-xs mt-1">Seg a Sex, 08h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0b1a29] border border-[#1a3045] flex items-center justify-center text-[#5cc7d9] shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Matriz</h4>
                    <p className="text-[#a3b8cc] text-sm mt-1">Av. Paulista, 1000<br/>São Paulo - SP, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#10263a] p-8 rounded-xl border border-[#1a3045] shadow-xl flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Campo Nome */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-sm font-bold text-[#a3b8cc]">Nome Completo</label>
                  <input 
                    type="text" 
                    id="nome"
                    required
                    placeholder="Ex: João da Silva"
                    className="bg-[#0b1a29] border border-[#1a3045] rounded-lg p-3 text-white text-sm focus:outline-none focus:border-[#5cc7d9] focus:ring-1 focus:ring-[#5cc7d9] transition-all placeholder-[#a3b8cc]/40"
                  />
                </div>

                {/* Campo E-mail */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-[#a3b8cc]">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    placeholder="joao@suaempresa.com"
                    className="bg-[#0b1a29] border border-[#1a3045] rounded-lg p-3 text-white text-sm focus:outline-none focus:border-[#5cc7d9] focus:ring-1 focus:ring-[#5cc7d9] transition-all placeholder-[#a3b8cc]/40"
                  />
                </div>
              </div>

              {/* Campo Assunto */}
              <div className="flex flex-col gap-2">
                <label htmlFor="assunto" className="text-sm font-bold text-[#a3b8cc]">Assunto</label>
                <select 
                  id="assunto"
                  required
                  defaultValue=""
                  className="bg-[#0b1a29] border border-[#1a3045] rounded-lg p-3 text-white text-sm focus:outline-none focus:border-[#5cc7d9] focus:ring-1 focus:ring-[#5cc7d9] transition-all appearance-none"
                >
                  <option value="" disabled>Selecione um tópico...</option>
                  <option value="duvida">Dúvida sobre a plataforma</option>
                  <option value="tecnico">Problema Técnico</option>
                  <option value="financeiro">Financeiro / Faturamento</option>
                  <option value="sugestao">Sugestão de Melhoria</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              {/* Campo Mensagem */}
              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="text-sm font-bold text-[#a3b8cc]">Mensagem</label>
                <textarea 
                  id="mensagem"
                  required
                  rows={5}
                  placeholder="Descreva detalhadamente como podemos te ajudar..."
                  className="bg-[#0b1a29] border border-[#1a3045] rounded-lg p-3 text-white text-sm focus:outline-none focus:border-[#5cc7d9] focus:ring-1 focus:ring-[#5cc7d9] transition-all placeholder-[#a3b8cc]/40 resize-none"
                ></textarea>
              </div>

              {/* Botão e Alertas */}
              <div className="mt-2">
                {statusEnvio === 'sucesso' ? (
                  <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-lg text-center font-bold text-sm animate-pulse">
                    Mensagem enviada com sucesso! Retornaremos em breve.
                  </div>
                ) : (
                  <button 
                    type="submit"
                    disabled={statusEnvio === 'enviando'}
                    className="w-full bg-[#5cc7d9] text-[#0b1a29] py-3.5 rounded-lg font-bold hover:bg-[#4eb3c4] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {statusEnvio === 'enviando' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[#0b1a29]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </button>
                )}
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Suporte;