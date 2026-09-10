import { Facebook, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-primary text-white">
      <div className="px-gutter max-w-max-width mx-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        <div className="lg:col-span-4 flex flex-col gap-6">
          <img 
            src="https://unimaisveiculos.com.br/wp-content/uploads/2025/02/logo_unimais-1.svg" 
            alt="Unimais Veículos" 
            className="h-14 w-auto object-contain object-left mb-2" 
          />
          <p className="text-sm leading-relaxed opacity-90 pr-4">
            A Unimais Veículos está há mais de 10 anos no mercado. Com mais de 40 mil veículos negociados, somos uma revenda de carros novos e seminovos de alta procedência, garantindo a você um excelente negócio com qualidade e satisfação.
          </p>
          <div className="mt-4">
            <h4 className="font-bold text-base mb-4 pb-2 border-b border-blue-600/50 block w-full max-w-[250px]">Horário de Funcionamento</h4>
            <div className="flex flex-col gap-4 mt-2 text-sm opacity-90">
              <div>
                <strong className="block mb-0.5">Segunda à Sexta</strong>
                <span>08:00 - 19:00</span>
              </div>
              <div>
                <strong className="block mb-0.5">Sábados</strong>
                <span>08:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-8">
           <div>
            <h4 className="font-bold text-base mb-6 pb-2 border-b border-blue-600/50 block w-full max-w-[200px]">Mapa do Site</h4>
            <div className="flex flex-col gap-y-4 text-sm opacity-90">
              <Link to="/" className="hover:text-action-orange transition-colors">Estoque</Link>
              <Link to="/encontrar-veiculo" className="hover:text-action-orange transition-colors">Encontrar veículo</Link>
              <button onClick={() => openWhatsApp()} className="hover:text-action-orange transition-colors bg-transparent border-none p-0 text-left cursor-pointer">Contato</button>
              <button onClick={() => window.dispatchEvent(new CustomEvent('openTradeInModal'))} className="hover:text-action-orange transition-colors bg-transparent border-none p-0 text-left cursor-pointer">Avaliar Grátis</button>
            </div>
           </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div>
            <h4 className="font-bold text-base mb-6 pb-2 border-b border-blue-600/50 block w-full max-w-[200px]">Entre em contato</h4>
            <div className="flex flex-col gap-4 text-sm opacity-90">
              <p>contato@unimaisveiculos.com.br</p>
              <p>Fone: (19) 99331-4310</p>
              
              <div className="mt-4 space-y-6">
                <div>
                  <strong className="block mb-1">Unidade Castelo</strong>
                  <span className="leading-snug block">Avenida Francisco José de Camargo Andrade, 520<br/>Jardim Chapadão – Campinas – SP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-5 mt-6 opacity-90">
            <a href="https://www.facebook.com/unimaisveiculos" target="_blank" rel="noopener noreferrer" className="hover:text-action-orange transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/unimais_veiculos" target="_blank" rel="noopener noreferrer" className="hover:text-action-orange transition-colors"><Instagram className="w-5 h-5" /></a>
            <button onClick={() => openWhatsApp()} className="hover:text-action-orange transition-colors bg-transparent border-none p-0 cursor-pointer"><WhatsAppIcon className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </footer>
  );
}
