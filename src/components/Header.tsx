import { Phone, Menu } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { openWhatsApp } from '../utils/whatsapp';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLpAmoreiras = location.pathname === '/' || location.pathname.startsWith('/veiculo');
  const isExactLp = location.pathname === '/';

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (isExactLp) {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate('/#' + id);
      // Wait for navigation then scroll
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

  const handleEncontrarVeiculoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isExactLp) {
      if (window.innerWidth < 1024) {
        window.dispatchEvent(new CustomEvent('openMobileFilters'));
      } else {
        scrollToSection(e as any, 'filtros');
      }
    } else {
      navigate('/#filtros');
      setTimeout(() => {
        if (window.innerWidth < 1024) {
          window.dispatchEvent(new CustomEvent('openMobileFilters'));
        } else {
          const el = document.getElementById('filtros');
          if (el) {
            const yOffset = -100;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }, 100);
    }
  };

  return (
    <header className={`bg-surface border-b border-outline-variant w-full top-0 z-50 ${location.pathname.startsWith('/veiculo') ? 'absolute' : 'fixed'}`}>
      <div className="flex justify-between items-center w-full px-gutter max-w-max-width mx-margin-desktop h-20">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="https://unimaisveiculos.com.br/wp-content/uploads/2025/02/Group.svg" alt="Unimais Veículos" className="h-8 w-auto" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {!isLpAmoreiras && (
            <Link to="/venda-unimais" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg">Início</Link>
          )}
          
          {isLpAmoreiras ? (
            <a href="#estoque" onClick={(e) => scrollToSection(e, 'estoque')} className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg">Estoque</a>
          ) : (
            <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg">Estoque</Link>
          )}

          {!isLpAmoreiras && (
            <Link to="/financiamento" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg">Financiamento</Link>
          )}

          {isLpAmoreiras ? (
            <a href="#filtros" onClick={handleEncontrarVeiculoClick} className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg">Encontrar Veículo</a>
          ) : (
            <Link to="/encontrar-veiculo" className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg">Encontrar Veículo</Link>
          )}

          {!isLpAmoreiras && (
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg" href="/venda-unimais#lojas">Nossas Lojas</a>
          )}

          <button onClick={() => openWhatsApp()} className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-lg text-label-lg bg-transparent border-none p-0 cursor-pointer">Contato</button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-action-orange transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-label-lg text-label-lg">(19) 3217-8850</span>
          </button>
          <a className="hidden md:inline-flex bg-action-orange text-white px-6 py-2 rounded-lg font-label-lg text-label-lg hover:bg-orange-600 transition-colors shadow-sm" href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("openTradeInModal")); }}>Avaliar Grátis</a>
          <button className="lg:hidden text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
