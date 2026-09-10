import { Car, Store, ThumbsUp } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-12 bg-action-orange text-white text-center">
      <div className="max-w-max-width mx-margin-desktop px-gutter flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex items-center gap-4">
          <Car className="w-12 h-12" />
          <div className="text-left">
            <div className="font-headline-md text-headline-md">+40.000</div>
            <div className="font-label-md text-label-md opacity-90">Carros negociados</div>
          </div>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/30"></div>
        <div className="flex items-center gap-4">
          <Store className="w-12 h-12" />
          <div className="text-left">
            <div className="font-headline-md text-headline-md">5 Lojas</div>
            <div className="font-label-md text-label-md opacity-90">Em Campinas e região</div>
          </div>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/30"></div>
        <div className="flex items-center gap-4">
          <ThumbsUp className="w-12 h-12" />
          <div className="text-left">
            <div className="font-headline-md text-headline-md">10 Anos</div>
            <div className="font-label-md text-label-md opacity-90">De confiança e tradição</div>
          </div>
        </div>
      </div>
    </section>
  );
}
