import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export default function OurStores() {
  const stores = [
    {
      name: "Loja Castelo",
      address: "Avenida Francisco José de Camargo Andrade, 520\nJardim Chapadão – Campinas – SP",
      mapLink: "https://maps.app.goo.gl/8n9n6n9n6n9n6n9n6",
      phone: "(19) 99331-4310",
      image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEHsEkatt5BvnAPaWvepD0i9WjrLR4SwZeL8G_Z5zET6vLp1QgDevys3gfZasWGSbBlhahXvdZcY7by_V4jX1cxDo81J5adzrXkzsjO_0tH89fLoyRNZL52Zm9YaYqVYNHCTQjb1w=s680-w680-h510"
    }
  ];

  return (
    <section id="lojas" className="py-16 md:py-24 bg-surface-gray">
      <div className="max-w-max-width mx-margin-desktop px-gutter">
        <h2 className="font-headline-md text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Nossa Loja
        </h2>
        
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-6">
          {stores.map((store, index) => (
            <div key={index} className="bg-primary rounded-xl shadow-md overflow-hidden flex flex-col border border-primary/20">
              <div className="h-48 overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-white">
                <h3 className="font-bold text-lg text-white mb-4">{store.name}</h3>
                
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 mb-4 text-white/90 hover:text-white flex-grow group transition-colors"
                >
                  <MapPin className="w-5 h-5 shrink-0 text-action-orange mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-sm whitespace-pre-line leading-relaxed">{store.address}</p>
                </a>
                
                <a 
                  href={`https://api.whatsapp.com/send?phone=5519993314310&text=${encodeURIComponent('Olá, gostaria de falar com um consultor da ' + store.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-button"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>Fale com a gente</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
