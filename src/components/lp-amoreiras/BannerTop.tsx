import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { openWhatsApp } from '../../utils/whatsapp';

const banners = [
  {
    src: 'https://res.cloudinary.com/ifuatk2z/image/upload/v1788979204/bannerUnimaisDomicio2.png',
    btnText: 'Fale com especialista',
    btnPosition: 'left'
  },
  {
    src: 'https://res.cloudinary.com/ifuatk2z/image/upload/v1788979199/bannerUnimaisDomicio1.png',
    btnText: 'Fale com especialista',
    btnPosition: 'right'
  }
];

export default function BannerTop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

  const handleOpenWhatsApp = () => {
    openWhatsApp('Olá! Vi o banner no site da Unimais Castelo e gostaria de falar com um especialista.');
  };

  return (
    <div 
      className="w-full relative rounded-xl overflow-hidden mb-6 group bg-slate-100 aspect-[2398/656]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="w-full h-full shrink-0 relative">
            <img
              src={banner.src}
              alt={`Banner Unimais ${index + 1}`}
              className="w-full h-full object-contain"
            />
            {/* Call to action button */}
            <div className={`absolute bottom-2 md:bottom-4 lg:bottom-6 ${banner.btnPosition === 'right' ? 'right-4 md:right-8 lg:right-16' : 'left-4 md:left-8 lg:left-16'} z-20`}>
              <button
                onClick={handleOpenWhatsApp}
                className="bg-action-orange hover:bg-orange-600 text-white font-bold py-1.5 px-4 md:py-2 md:px-6 rounded-lg shadow-xl transition-transform hover:scale-105 text-xs md:text-sm lg:text-base uppercase tracking-wide flex items-center justify-center gap-1.5 font-black"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                {banner.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-1.5 md:p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-30"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-1.5 md:p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-30"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-30">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-4 md:w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
