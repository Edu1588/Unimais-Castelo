import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="bg-primary text-white overflow-hidden relative">
      <div className="flex flex-col lg:flex-row items-stretch">
        
        {/* Left: Circle Image Area */}
        <div className="w-full lg:w-[45%] flex items-center justify-center p-8 lg:p-12">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-[8px] border-white shadow-xl relative z-10 shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1652509573480-a190f1c61f6d?q=80&w=688&auto=format&fit=crop" 
              alt="Cliente feliz na Unimais" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[55%] relative z-10 py-16 px-gutter lg:pr-gutter lg:pl-10 flex flex-col justify-center">
          <h2 className="font-headline-md text-3xl md:text-4xl font-bold mb-12 leading-tight">
            Porque escolher a<br/>Unimais Veículos?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {/* Item 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>01</span>
                <h3 className="text-xl md:text-2xl font-black text-[#8bb8f8] leading-none uppercase tracking-wide">Venda<br/>Rápida</h3>
              </div>
              <p className="text-sm md:text-base opacity-90 leading-relaxed mt-2">
                O seu carro avaliado, oferta recebida e <strong>pagamento concluído</strong> em tempo recorde.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>02</span>
                <h3 className="text-xl md:text-2xl font-black text-[#8bb8f8] leading-none uppercase tracking-wide">Zero<br/>Esforço</h3>
              </div>
              <p className="text-sm md:text-base opacity-90 leading-relaxed mt-2">
                Não tenha trabalho de criar anúncios ou ir até o lojista e concessionárias. <strong>Nem precisa sair de casa!</strong>
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>03</span>
                <h3 className="text-xl md:text-2xl font-black text-[#8bb8f8] leading-none uppercase tracking-wide">100%<br/>Seguro</h3>
              </div>
              <p className="text-sm md:text-base opacity-90 leading-relaxed mt-2">
                Não lide com terceiros, <strong>resolvemos tudo</strong>, garantimos a oferta e pagamos à vista, sem dor de cabeça.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>04</span>
                <h3 className="text-xl md:text-2xl font-black text-[#8bb8f8] leading-none uppercase tracking-wide">Sem<br/>Custo</h3>
              </div>
              <p className="text-sm md:text-base opacity-90 leading-relaxed mt-2">
                <strong>Todo o processo é por nossa conta</strong>, receba a oferta sem custo e sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
