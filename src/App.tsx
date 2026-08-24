import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação dos seus componentes
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Footer from './components/footer/Footer';

function App() {
  return (
    // BrowserRouter "abraça" toda a aplicação para habilitar as rotas
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0b1a29]">
        
        {/* Navbar fica fora do Routes porque aparece em todas as páginas */}
        <Navbar />
        
        <main className="flex-grow">
          {/* O Routes define qual componente vai aparecer no "meio" da tela baseado na URL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        
        {/* Footer também aparece em todas as páginas */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;