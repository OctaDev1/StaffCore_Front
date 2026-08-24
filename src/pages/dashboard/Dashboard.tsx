import React from 'react';
import { Link } from 'react-router-dom';

// 1. Tipagem dos dados (TypeScript)
interface Colaborador {
  id: string;
  nome: string;
  email: string;
  depto: string;
  contrato: string;
  status: 'Ativo' | 'Férias';
}

const Dashboard: React.FC = () => {
  // Dados simulados da sua API Spring Boot
  const colaboradores: Colaborador[] = [
    { id: '00104', nome: 'Ana Silva', email: 'ana@empresa.com', depto: 'Diretoria', contrato: 'CLT', status: 'Ativo' },
    { id: '00105', nome: 'Carlos Gomes', email: 'carlos@empresa.com', depto: 'Tecnologia', contrato: 'PJ', status: 'Ativo' },
    { id: '00106', nome: 'Sofia Banes', email: 'sofia@empresa.com', depto: 'Marketing', contrato: 'Estágio', status: 'Férias' },
  ];

  return (
    <div className="flex min-h-screen bg-[#0b1a29] font-sans text-white">
      
      {/* === SIDEBAR (Escondida no mobile) === */}
      <aside className="w-64 bg-[#10263a] border-r border-[#1a3045] hidden md:flex flex-col justify-between shrink-0">
        <div>
          {/* Logo */}
          <div className="h-20 flex items-center px-6 border-b border-[#1a3045] gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#5cc7d9] flex items-center justify-center text-[#5cc7d9] font-bold text-xs">SC</div>
            <span className="font-bold text-lg tracking-wide">Staff Core</span>
          </div>
          
          {/* Menu */}
          <nav className="flex flex-col gap-2 px-4 mt-6 text-sm font-medium">
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#a3b8cc] hover:text-white hover:bg-[#1a3045] rounded-lg transition-colors">
              <i className="fa-solid fa-chart-pie"></i> Dashboard
            </a>
            {/* Item Ativo */}
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-white bg-[#1a3045] rounded-lg border-l-4 border-[#5cc7d9] transition-colors">
              <i className="fa-solid fa-users"></i> Colaboradores
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#a3b8cc] hover:text-white hover:bg-[#1a3045] rounded-lg transition-colors">
              <i className="fa-solid fa-building"></i> Departamentos
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#a3b8cc] hover:text-white hover:bg-[#1a3045] rounded-lg transition-colors">
              <i className="fa-solid fa-gear"></i> Configurações
            </a>
          </nav>
        </div>

        {/* Rodapé da Sidebar */}
        <div className="p-4 border-t border-[#1a3045]">
          <Link to="/" className="flex items-center gap-3 text-[#a3b8cc] hover:text-red-400 transition-colors px-4 py-2">
            <i className="fa-solid fa-right-from-bracket"></i> Sair do sistema
          </Link>
        </div>
      </aside>

      {/* === CONTEÚDO PRINCIPAL === */}
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        
        {/* === TOPBAR RESPONSIVA === */}
        {/* Modificado para flex-col no mobile e flex-row no desktop */}
        <header className="bg-[#0b1a29] border-b border-[#1a3045] flex flex-col md:flex-row md:items-center justify-between p-4 md:px-8 md:h-20 gap-4">
          
          <h1 className="text-xl md:text-2xl font-bold truncate text-white">
            Gestão de Colaboradores
          </h1>
          
          {/* Container de Ações (Busca + Notificações) */}
          <div className="flex items-center gap-3 md:gap-6 w-full md:w-auto">
            
            {/* Barra de Busca Profissional */}
            {/* group permite que o ícone mude de cor quando o input é focado */}
            <div className="relative flex-1 md:w-80 group">
              <svg 
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a3b8cc] group-focus-within:text-[#5cc7d9] transition-colors" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Buscar por nome ou CPF..."
                // Alterado de w-72 para w-full, usando focus:ring para um brilho premium
                className="w-full bg-[#10263a] border border-[#1a3045] rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#a3b8cc]/60 focus:outline-none focus:border-[#5cc7d9] focus:ring-2 focus:ring-[#5cc7d9]/20 transition-all shadow-inner"
              />
            </div>
            
            {/* Notificações Profissional (Sino em SVG) */}
            <div className="w-10 h-10 shrink-0 bg-[#10263a] border border-[#1a3045] rounded-full flex items-center justify-center cursor-pointer relative hover:border-[#5cc7d9] transition-all group">
              <svg 
                className="w-5 h-5 text-[#a3b8cc] group-hover:text-[#5cc7d9] transition-colors" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#10263a]"></span>
            </div>
          </div>
        </header>

        {/* Área de Dados */}
        <div className="p-4 md:p-8 overflow-y-auto">
          
          {/* Cards de KPI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#10263a] p-6 rounded-xl border border-[#1a3045]">
              <p className="text-[#a3b8cc] text-sm mb-1">Total de Colaboradores</p>
              <h3 className="text-3xl font-bold">142</h3>
            </div>
            <div className="bg-[#10263a] p-6 rounded-xl border border-[#1a3045]">
              <p className="text-[#a3b8cc] text-sm mb-1">Novas Admissões (Mês)</p>
              <h3 className="text-3xl font-bold text-green-400">+5</h3>
            </div>
            <div className="bg-[#10263a] p-6 rounded-xl border border-[#1a3045]">
              <p className="text-[#a3b8cc] text-sm mb-1">Férias / Alertas</p>
              <h3 className="text-3xl font-bold text-yellow-400">3</h3>
            </div>
          </div>

          {/* Tabela de Colaboradores */}
          <div className="bg-[#10263a] rounded-xl border border-[#1a3045] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-[#1a3045] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <h3 className="text-lg font-bold">Quadro de Funcionários</h3>
              <button className="bg-[#5cc7d9] text-[#0b1a29] px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#4eb3c4] transition-colors w-full sm:w-auto text-center">
                + Novo Colaborador
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0b1a29] text-[#a3b8cc] text-sm border-b border-[#1a3045]">
                    <th className="py-4 px-6 font-medium">Matrícula</th>
                    <th className="py-4 px-6 font-medium">Nome do Colaborador</th>
                    <th className="py-4 px-6 font-medium">Departamento</th>
                    <th className="py-4 px-6 font-medium">Contrato</th>
                    <th className="py-4 px-6 font-medium">Status</th>
                    <th className="py-4 px-6 font-medium text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {colaboradores.map((colab, index) => (
                    <tr key={index} className="border-b border-[#1a3045] hover:bg-[#152e46] transition-colors">
                      <td className="py-4 px-6 font-bold">{colab.id}</td>
                      <td className="py-4 px-6">
                        <p className="font-bold">{colab.nome}</p>
                        <p className="text-[#a3b8cc] text-xs mt-0.5">{colab.email}</p>
                      </td>
                      <td className="py-4 px-6">{colab.depto}</td>
                      <td className="py-4 px-6">{colab.contrato}</td>
                      
                      {/* === LINHA DE STATUS CORRIGIDA === */}
                      <td className="py-4 px-6">
                        <span 
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                            colab.status === 'Ativo' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          <span 
                            className={`w-2 h-2 rounded-full ${
                              colab.status === 'Ativo' ? 'bg-green-400' : 'bg-yellow-400'
                            }`}
                          ></span>
                          {colab.status}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-right space-x-3">
                        <button className="text-[#5cc7d9] hover:text-white transition-colors font-medium">Editar</button>
                        <button className="text-red-400 hover:text-red-300 transition-colors font-medium">Excluir</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;