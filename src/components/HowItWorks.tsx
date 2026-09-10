import { PlayCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-surface-gray">
      <div className="max-w-max-width mx-margin-desktop px-gutter">
        <h2 className="font-headline-md text-headline-md text-primary mb-12 text-center md:text-left">
          Como funciona?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 2 */}
          <div className="bg-primary rounded-xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant">
              <img src="https://res.cloudinary.com/djw0tqmiw/image/upload/v1782834272/eoaokoogzn1ca59keih2.png" alt="Avaliação Gratuita" className="object-cover w-full h-full" />
            </div>
            <h4 className="font-headline-sm text-lg uppercase font-black text-white leading-tight">1. Avaliação Gratuita</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              <strong className="font-bold text-white">Agende online</strong> com um especialista qualificado, que irá avaliar as <strong className="font-bold text-white">condições do seu veículo</strong>, em uma de nossas lojas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-primary rounded-xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant">
               <img src="https://res.cloudinary.com/djw0tqmiw/image/upload/v1782327386/q80pis9mdr9wzefvx252.png" alt="Acompanhamento" className="object-cover w-full h-full" />
            </div>
            <h4 className="font-headline-sm text-lg uppercase font-black text-white leading-tight">2. Acompanhamento</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              Pelo nosso atendimento exclusivo é possível acompanhar todas as etapas da jornada e manter contato direto com o especialista.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-primary rounded-xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant">
               <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" alt="Oferta" className="object-cover w-full h-full" />
            </div>
            <h4 className="font-headline-sm text-lg uppercase font-black text-white leading-tight">3. Oferta em 24 Horas</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              Avaliamos seu carro e garantimos as melhores condições do mercado. Te enviamos a <strong className="font-bold text-white">melhor proposta</strong>.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-primary rounded-xl p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant">
               <img src="https://res.cloudinary.com/djw0tqmiw/image/upload/v1782327386/saxjaink2abjqlofpyye.png" alt="Pagamento à Vista" className="object-cover w-full h-full" />
            </div>
            <h4 className="font-headline-sm text-lg uppercase font-black text-white leading-tight">4. Pagamento à Vista</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              Via <strong className="font-bold text-white">transferência bancária ou Pix, antes mesmo da retirada do veículo</strong>, de forma segura.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
