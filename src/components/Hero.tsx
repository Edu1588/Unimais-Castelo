import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center -scale-x-100 z-0"
        style={{ backgroundImage: `url('https://res.cloudinary.com/djw0tqmiw/image/upload/v1783098979/xoafwnxiea0ujpeuzjnf.png')` }}
      ></div>
      <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-primary via-primary/80 to-transparent z-0"></div>
      <div className="max-w-max-width mx-margin-desktop px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-xl">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6">
            Venda seu carro <span className="text-action-orange">agora.</span><br/>De forma rápida e segura.
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 mb-8">
            Pagamento à vista, sem burocracia ou surpresas. Tranquilidade garantida por quem atua no mercado desde 2015 com mais de 40.000 carros negociados.
          </p>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-white/20">
            <h3 className="font-bold text-base text-white mb-4">Preencha o Formulário e Agende sua Avaliação Gratuita</h3>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <select className="w-full border border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white appearance-none cursor-pointer text-on-surface">
                  <option value="">Marca</option>
                  <option value="fiat">Fiat</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="volkswagen">Volkswagen</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <div className="relative">
                <select disabled className="w-full border border-outline-variant rounded-lg p-3 outline-none transition-colors bg-gray-50 text-gray-400 appearance-none cursor-not-allowed">
                  <option value="">Modelo</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-300">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <div className="relative">
                <select disabled className="w-full border border-outline-variant rounded-lg p-3 outline-none transition-colors bg-gray-50 text-gray-400 appearance-none cursor-not-allowed">
                  <option value="">Ano</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-300">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <div className="relative">
                <select disabled className="w-full border border-outline-variant rounded-lg p-3 outline-none transition-colors bg-gray-50 text-gray-400 appearance-none cursor-not-allowed">
                  <option value="">Versão</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-300">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              
              <button className="w-full bg-action-orange text-white py-3 rounded-lg font-label-lg text-label-lg hover:bg-orange-600 transition-colors shadow-md flex justify-center items-center gap-2 mt-2" type="button">
                Agendar Avaliação Gratuita
              </button>
              <p className="text-xs text-center text-white/70 mt-2">Ao continuar, você concorda com nossa Política de Privacidade.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
