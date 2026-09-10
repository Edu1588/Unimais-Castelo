import { Percent, Clock, ShieldCheck, ThumbsUp } from 'lucide-react';

export default function WhyChooseUsFinanciamento() {
  const benefits = [
    {
      icon: <Percent className="w-8 h-8 text-white" />,
      title: "As Melhores Taxas",
      description: "Trabalhamos com os principais bancos para garantir as menores taxas de juros do mercado para você."
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Aprovação Rápida",
      description: "Análise de crédito ágil e sem burocracia. Saia de carro novo no mesmo dia."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "100% Seguro",
      description: "Processo totalmente transparente e seguro, com parceiros financeiros consolidados."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-white" />,
      title: "Condições Flexíveis",
      description: "Opções com zero de entrada, parcelas que cabem no seu bolso e planos em até 60 meses."
    }
  ];

  return (
    <section className="bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-action-orange rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-max-width mx-margin-desktop px-gutter py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        <div className="flex flex-col justify-center">
          <h2 className="font-headline-md text-3xl md:text-4xl font-bold mb-6">
            Por que financiar com a Unimais Veículos?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Encontrar o carro dos seus sonhos é apenas o primeiro passo. Nós garantimos que você tenha as melhores condições para levá-lo para casa, com um financiamento sob medida para sua realidade.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-xl">{benefit.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10 lg:hidden"></div>
          <img 
            src="https://res.cloudinary.com/djw0tqmiw/image/upload/v1782836144/g6deu1mltyt5fh0bdbto.png" 
            alt="Cliente feliz com chave do carro" 
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
