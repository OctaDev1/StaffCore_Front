import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importações reais dos seus arquivos
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Dashboard from './pages/dashboard/Dashboard';
import Suporte from './pages/suporte/Suporte'; 
import Recurso from './pages/recurso/Recurso';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0b1a29]">
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recursos" element= {<Recurso />} />
            <Route path="/suporte" element={<Suporte />} /> 
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;