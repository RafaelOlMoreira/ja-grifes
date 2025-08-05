import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TopAnuncio from './components/TopAnuncio.jsx';
import Lançamentos from './components/Lançamentos.jsx';
import TimesBrasileiros from './components/TimesBrasileiros.jsx';
import TimesInternacionais from './components/TimesInternacionais.jsx';
import InfoLoja from './components/InfoLoja.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import Pedidos from './pages/Pedidos.jsx';
import Conta from './pages/Conta.jsx';
import Sacola from './pages/Sacola.jsx';
import FinalCompra from './pages/FinalCompra.jsx';
import Desejos from './pages/Desejos.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
            <>
            <Navbar />
            <TopAnuncio />
            <Lançamentos />
            <TimesBrasileiros />
            <TimesInternacionais />
            <InfoLoja />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/sacola" element={<Sacola />} />
        <Route path="/finalcompra" element={<FinalCompra />} />
        <Route path="/desejos" element={<Desejos />} />
      </Routes>
    </>
  );
}

export default App;