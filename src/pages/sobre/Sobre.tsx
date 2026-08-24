import React from 'react';

const Sobre = () => {
  // Array com os dados da equipe para facilitar a renderização
  const equipe = [
    { nome: 'Felipe Oliveira Lopes', cargo: 'Tester', imagem: 'https://ik.imagekit.io/JohnnieDiniz/staffcore/integrantes/foto_felipe.jpeg' },
    { nome: 'Gabriel Jose Alegre', cargo: 'CTO', imagem: '11' },
    { nome: 'Giovanna Karolline Menezes Ribeiro', cargo: 'COO', imagem: '8' },
    { nome: 'Guilherme Oliveira', cargo: 'Tech Lead', imagem: '9' },
    { nome: 'Joao Vitor Diniz Alves', cargo: 'Dev Backend', imagem: '14' },
    { nome: 'Juliana Vitoria Pires Macedo', cargo: 'Dev Frontend', imagem: '10' },
    { nome: 'Maryane Praxedes Alves da Silva', cargo: 'Dev Frontend', imagem: '10' },
    { nome: 'Thiago Jose Nascimento Versiani', cargo: 'Dev Frontend', imagem: '10' },
  ];

  return (
    <div className="bg-[#0b1a29] min-h-screen pt-12 pb-24 px-10 text-white font-sans text-center">
      <div className="max-w-5xl mx-auto">
        
        {/* === CABEÇALHO E IMAGEM HERO === */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Conheça o Grupo OctaDev & Staff Core
        </h1>
        
        <div className="w-full h6 md:h-96 rounded-2xl overflow-hidden mb-8 border border-[#1a3045] shadow-2xl">
          <img 
            src="https://ik.imagekit.io/1frzfy0hh/equipe.png" 
            alt="Equipe OctaDev" 
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-lg text-[#a3b8cc] max-w-4xl mx-auto leading-relaxed mb-24">
          A OctaDev é uma empresa com a missão extraordinária de conectar ambientes corporativos, propondo 
          inovação com foco e transformando análises complexas em velocidade e agilidade. Somos essenciais 
          para uma gestão de pessoas completa, conectando o sucesso humano aos resultados do amanhã.
        </p>

        {/* === NOSSA EQUIPE === */}
        <h2 className="text-2xl font-bold mb-10">Nossa Equipe</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {equipe.map((membro, index) => (
            <a 
              key={index} 
              href={membro.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#10263a] rounded-xl overflow-hidden border border-[#1a3045] hover:border-[#5cc7d9]/50 transition-colors group block"
            >
              {/* O src agora aponta diretamente para a URL que você colou lá em cima */}
              <img 
                src={membro.imagem} 
                alt={membro.nome} 
                className="w-full h-56 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="p-5 text-center border-t border-[#1a3045]">
                <h3 className="font-bold text-lg text-white">{membro.nome}</h3>
                <p className="text-[#5cc7d9] text-sm font-medium mt-1">{membro.cargo}</p>
              </div>
            </a>
          ))}
        </div>

        {/* === VISÃO E MISSÃO === */}
        <h2 className="text-2xl font-bold mb-8">Visão e Missão</h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-left">
          
          {/* Card Visão */}
          <div className="bg-[#10263a] p-8 rounded-xl border border-[#1a3045] flex flex-col items-center text-center hover:border-[#5cc7d9]/30 transition-colors">
            <div className="w-16 h-16 bg-[#0b1a29] border border-[#1a3045] rounded-xl flex items-center justify-center text-[#5cc7d9] mb-6">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Nossa Visão</h3>
            <p className="text-[#a3b8cc] leading-relaxed">
              Ser a principal referência em tecnologia para gestão de Recursos Humanos, criando um ecossistema digital onde empresas e colaboradores crescem juntos, com transparência e inovação contínua.
            </p>
          </div>

          {/* Card Missão */}
          <div className="bg-[#10263a] p-8 rounded-xl border border-[#1a3045] flex flex-col items-center text-center hover:border-[#5cc7d9]/30 transition-colors">
            <div className="w-16 h-16 bg-[#0b1a29] border border-[#1a3045] rounded-xl flex items-center justify-center text-[#5cc7d9] mb-6">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Nossa Missão</h3>
            <p className="text-[#a3b8cc] leading-relaxed">
              Descomplicar a rotina do RH através de automações inteligentes, garantindo que nossos clientes tenham tempo para focar no que realmente importa: o desenvolvimento humano.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Sobre;