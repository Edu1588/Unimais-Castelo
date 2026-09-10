import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQFinanciamento() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso dar entrada para financiar um veículo?",
      answer: "Não necessariamente. Trabalhamos com opções de financiamento com zero de entrada, dependendo do seu perfil de crédito e das condições do banco."
    },
    {
      question: "Quais documentos preciso para simular um financiamento?",
      answer: "Para a simulação inicial, precisamos apenas de alguns dados básicos como CPF, data de nascimento e o veículo desejado. Para efetivar o contrato, serão solicitados CNH, comprovante de residência e renda."
    },
    {
      question: "Autônomo pode financiar veículo?",
      answer: "Sim! Trabalhamos com financeiras que possuem políticas específicas para profissionais autônomos, avaliando o perfil de crédito mesmo sem holerite."
    },
    {
      question: "Posso usar meu carro atual como entrada?",
      answer: "Com certeza. Avaliamos seu veículo usado com as melhores taxas do mercado e usamos o valor como entrada para abater no financiamento do seu carro novo."
    },
    {
      question: "Quanto tempo demora para aprovar o crédito?",
      answer: "Nossa análise de crédito é super ágil. Na maioria dos casos, a resposta sai na hora, permitindo que você saia com o carro no mesmo dia."
    }
  ];

  return (
    <section id="faq-financiamento" className="py-16 md:py-24 bg-surface-gray">
      <div className="max-w-3xl mx-auto px-gutter">
        <h2 className="font-headline-md text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Dúvidas sobre <span className="text-action-orange">Financiamento</span>
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-primary shadow-md' : 'border-outline-variant hover:border-outline'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-on-surface'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary' : 'text-on-surface-variant'
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'pb-5 opacity-100 max-h-[500px]' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
