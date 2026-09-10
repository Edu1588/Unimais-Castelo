import { MessageSquareText, Search, ShieldCheck, CarFront } from 'lucide-react';

export default function HowItWorksEncontreVeiculo() {
  const steps = [
    {
      icon: <MessageSquareText className="w-8 h-8 text-action-orange" />,
      title: "1. Você nos conta o que procura",
      description: "Preencha o formulário com a marca, modelo, ano e o valor que deseja investir no seu próximo carro."
    },
    {
      icon: <Search className="w-8 h-8 text-action-orange" />,
      title: "2. Nossa equipe entra em ação",
      description: "Acionamos nossa rede de parceiros e rastreamos o mercado para encontrar as melhores opções disponíveis."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-action-orange" />,
      title: "3. Avaliação rigorosa",
      description: "Ao encontrar o veículo, realizamos um diagnóstico estrutural e mecânico completo para garantir a procedência."
    },
    {
      icon: <CarFront className="w-8 h-8 text-action-orange" />,
      title: "4. Negócio fechado",
      description: "Apresentamos o carro para você. Se aprovar, cuidamos da papelada e do financiamento. Simples assim!"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-gray">
      <div className="max-w-max-width mx-margin-desktop px-gutter">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-headline-md text-3xl md:text-4xl font-bold text-primary mb-6">
            Como funciona a nossa busca inteligente?
          </h2>
          <p className="text-lg text-on-surface-variant">
            Esqueça a dor de cabeça de procurar em vários lugares. Nós fazemos o trabalho duro para você encontrar o carro ideal com total segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-primary p-8 rounded-2xl shadow-sm border border-transparent hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                {step.icon}
              </div>
              <h3 className="font-bold text-xl text-white mb-4">{step.title}</h3>
              <p className="text-white/90 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
