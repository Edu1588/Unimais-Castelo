import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import WhatsAppButton from './components/WhatsAppButton';
import WhatsAppModal from './components/WhatsAppModal';
import TradeInModal from './components/TradeInModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Financiamento from './pages/Financiamento';
import EncontreVeiculo from './pages/EncontreVeiculo';
import LpAmoreiras from './pages/LpAmoreiras';
import VehicleDetail from './pages/VehicleDetail';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen relative">
        <Header />
        <main className="pt-20 pb-24 md:pb-0">
          <Routes>
            <Route path="/venda-unimais" element={<Home />} />
            <Route path="/financiamento" element={<Financiamento />} />
            <Route path="/encontrar-veiculo" element={<EncontreVeiculo />} />
            <Route path="/" element={<LpAmoreiras />} />
            <Route path="/veiculo/:id" element={<VehicleDetail />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav />
        <WhatsAppButton />
        <WhatsAppModal />
        <TradeInModal />
      </div>
    </BrowserRouter>
  );
}
