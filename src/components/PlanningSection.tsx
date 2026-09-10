export default function PlanningSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-gray">
      <div className="max-w-max-width mx-margin-desktop px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline-md text-3xl md:text-4xl font-bold text-primary mb-6">
            Planeje seu financiamento com segurança e melhores condições
          </h2>
          <p className="text-on-surface-variant mb-6 text-lg">
            Simule agora e descubra parcelas, taxas e condições pré-aprovadas exclusivas para financiar seu veículo com tranquilidade. Tudo rápido, fácil e com a segurança que você precisa.
          </p>
          <h4 className="font-bold text-lg text-primary mb-4">Use crédito com responsabilidade e aproveite melhor seu financiamento:</h4>
          <ul className="space-y-3 text-on-surface-variant mb-6 list-disc pl-5">
            <li>Planeje sua compra e avalie se cabe no seu orçamento;</li>
            <li>Compare modelos, taxas e condições antes de decidir;</li>
            <li>Quanto maior a entrada, menor o valor das parcelas;</li>
            <li>Não comprometa mais que 30% do valor da sua renda com as prestações.</li>
          </ul>
          <p className="text-sm text-on-surface-variant italic border-l-4 border-action-orange pl-4 py-1">
            <strong>Importante:</strong> A simulação é apenas ilustrativa e não garante aprovação do crédito. A contratação está sujeita à análise e às condições do contrato.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[600px] border-4 border-white">
          <img src="https://res.cloudinary.com/djw0tqmiw/image/upload/v1782834726/xnd8nzcuoxj1rzzmywfj.jpg" alt="Planejamento financeiro" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}
