import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TopAnuncio from './components/TopAnuncio.jsx';
import Lançamentos from './components/Lançamentos.jsx';
import TimesBrasileiros from './components/TimesBrasileiros.jsx';
import TimesInternacionais from './components/TimesInternacionais.jsx';
import InfoLoja from './components/InfoLoja.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx'; // Ajuste o caminho conforme necessário

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
      </Routes>
    </>
  );
}

export default App;