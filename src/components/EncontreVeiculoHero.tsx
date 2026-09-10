import { Search, ChevronDown } from 'lucide-react';

export default function EncontreVeiculoHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://res.cloudinary.com/djw0tqmiw/image/upload/v1782411216/eqijf8kjsumynj9tcqtm.png')` }}
      ></div>
      <div className="absolute inset-y-0 right-0 w-full md:w-3/4 bg-gradient-to-l from-black/80 via-black/50 to-transparent z-0"></div>
      
      <div className="max-w-max-width mx-margin-desktop px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left side: Hero Text */}
        <div className="max-w-xl text-white">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6 leading-tight">
            Não achou seu carro? <span className="text-action-orange">Nós encontramos para você!</span>
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-lg">
            Temos acesso a uma ampla rede de parceiros e lojistas. Diga exatamente qual marca, modelo e versão você procura, e nossa equipe fará o trabalho de busca para entregar o carro dos seus sonhos com laudo cautelar e garantia.
          </p>
        </div>

        {/* Right side: Form */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl h-fit w-full max-w-md mx-auto lg:mx-0">
          <h3 className="font-bold text-xl text-primary mb-6 flex items-center gap-2">
            <Search className="w-6 h-6 text-action-orange" />
            Detalhes do Veículo
          </h3>

          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <select className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white appearance-none cursor-pointer text-on-surface">
                  <option value="">Marca</option>
                  <option value="fiat">Fiat</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="volkswagen">Volkswagen</option>
                  <option value="honda">Honda</option>
                  <option value="toyota">Toyota</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <div className="relative">
                <input type="text" placeholder="Modelo" className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white text-on-surface" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input type="text" placeholder="Ano Ex: 2020" className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white text-on-surface" />
              </div>
              <div className="relative">
                <input type="text" placeholder="Valor Máx." className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white text-on-surface" />
              </div>
            </div>

            <div className="border-t border-outline-variant my-2"></div>

            <div className="relative">
              <input type="text" placeholder="Seu Nome" className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white text-on-surface" />
            </div>
            
            <div className="relative">
              <input type="tel" placeholder="WhatsApp" className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white text-on-surface" />
            </div>
            
            <button className="w-full bg-action-orange text-white py-3 rounded-lg font-label-lg text-label-lg hover:bg-orange-600 transition-colors shadow-md flex justify-center items-center gap-2 mt-2" type="button">
              Solicitar Busca Especialista
            </button>
            <p className="text-xs text-center text-on-surface-variant mt-2">Nossa equipe entrará em contato rapidamente.</p>
          </form>
        </div>

      </div>
    </section>
  );
}
