import { Home, Tag, Phone, Car, Search } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { openWhatsApp } from '../utils/whatsapp';

export default function MobileNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLpAmoreiras = location.pathname === '/' || location.pathname.startsWith('/veiculo');
  const isExactLp = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isExactLp) {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate('/#' + id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleEncontrarVeiculoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isExactLp) {
      window.dispatchEvent(new CustomEvent('openMobileFilters'));
    } else {
      navigate('/#filtros');
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('openMobileFilters'));
      }, 100);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-3 md:hidden bg-surface shadow-lg border-t border-outline-variant rounded-t-xl">
      {!isLpAmoreiras && (
        <Link to="/venda-unimais" className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md">
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Início</span>
        </Link>
      )}

      {isLpAmoreiras ? (
        <button onClick={() => scrollToSection('estoque')} className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md bg-transparent border-none p-0">
          <Car className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Estoque</span>
        </button>
      ) : (
        <Link to="/" className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md">
          <Car className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Estoque</span>
        </Link>
      )}

      {isLpAmoreiras ? (
        <button onClick={handleEncontrarVeiculoClick} className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md bg-transparent border-none p-0">
          <Search className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Encontrar</span>
        </button>
      ) : (
        <Link to="/encontrar-veiculo" className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md">
          <Search className="w-5 h-5 mb-1" />
          <span className="text-[10px]">Encontrar</span>
        </Link>
      )}

      <button 
        onClick={() => openWhatsApp()}
        className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md bg-transparent border-none p-0 cursor-pointer"
      >
        <WhatsAppIcon className="w-5 h-5 mb-1 text-whatsapp-green" />
        <span className="text-[10px]">WhatsApp</span>
      </button>

      <a className="flex flex-col items-center justify-center text-on-surface-variant active:bg-surface-container-high transition-transform font-label-md" href="tel:1932178850">
        <Phone className="w-5 h-5 mb-1" />
        <span className="text-[10px]">Ligar</span>
      </a>
    </nav>
  );
}
