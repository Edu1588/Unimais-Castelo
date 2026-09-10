import { Search } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function CTAEncontreVeiculo() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-max-width mx-margin-desktop px-gutter">
        <div className="bg-gradient-to-r from-primary to-[#0f1d3a] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-action-orange opacity-20 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Deixe o trabalho de busca com especialistas.
            </h2>
            <p className="text-white/80 text-lg mb-0">
              Nós garantimos procedência, qualidade e o melhor preço na hora de buscar o seu veículo exclusivo. Fale com um de nossos consultores agora mesmo.
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto relative z-10">
            <button 
              className="w-full md:w-auto bg-action-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
              onClick={() => openWhatsApp('Olá! Gostaria que os especialistas da Unimais Castelo me ajudassem a encontrar um veículo específico.')}
            >
              <Search className="w-6 h-6" />
              Pedir para Procurar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
