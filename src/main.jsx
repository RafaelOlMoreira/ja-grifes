import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar.jsx'
import TopAnuncio from './components/TopAnuncio.jsx'
import Lançamentos from './components/Lançamentos.jsx'
import TimesBrasileiros from './components/TimesBrasileiros.jsx'
import TimesInternacionais from './components/TimesInternacionais.jsx'
import InfoLoja from './components/InfoLoja.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar />
    <TopAnuncio />
    <Lançamentos />
    <TimesBrasileiros />
    <TimesInternacionais />
    <InfoLoja />
    <Footer />
    
  </StrictMode>,
)
