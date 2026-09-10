import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "A Unimais Veículos compra carros usados?",
      answer: "Sim! Compramos seu carro à vista com avaliação justa e transparente."
    },
    {
      question: "Quais tipos de veículos vocês aceitam?",
      answer: "Aceitamos a maioria dos modelos, sujeito à avaliação. Consulte nossa equipe para mais detalhes."
    },
    {
      question: "Como faço para avaliar meu carro?",
      answer: "Basta trazer seu veículo até uma de nossas lojas ou entrar em contato para uma pré-avaliação online."
    },
    {
      question: "Preciso ter todos os documentos em dia?",
      answer: "Não, podemos usar a negociação para realizar a regularização dos documentos."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-section-mobile md:py-section-desktop bg-surface-gray">
      <div className="max-w-3xl mx-auto px-gutter">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Dúvidas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <button 
                  onClick={() => toggleOpen(index)} 
                  className="w-full text-left p-6 font-label-lg text-label-lg text-primary flex items-center justify-between focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <MinusCircle className="w-5 h-5 text-action-orange shrink-0" />
                  ) : (
                    <PlusCircle className="w-5 h-5 text-action-orange shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="font-body-md text-body-md text-on-surface-variant">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
