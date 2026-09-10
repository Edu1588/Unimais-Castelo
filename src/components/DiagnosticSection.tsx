import React from 'react';

export default function DiagnosticSection() {
  return (
    <section className="text-white overflow-hidden py-16 md:py-24 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://res.cloudinary.com/djw0tqmiw/image/upload/v1782834271/vbelvbcngrygaj1m2nqu.png')` }}
      ></div>
      
      <div className="max-w-max-width mx-margin-desktop px-gutter relative z-10">
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <div className="font-bold text-sm md:text-base text-white/90 mb-2 uppercase tracking-wide">
            DIAGNÓSTICO COMPLETO
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            CERTIFIQUE A QUALIDADE DO SEU NOVO VEÍCULO
          </h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-action-orange mb-4">
            Compre com segurança!
          </h3>
          
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Receba um relatório com o histórico veicular e uma avaliação completa que certifica as condições mecânicas e estruturais do veículo.
          </p>
        </div>

      </div>
    </section>
  );
}
