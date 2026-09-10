import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Calendar, Gauge, Phone, Mail } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import VehicleCard from '../components/lp-amoreiras/VehicleCard';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { useVehicles } from '../hooks/useVehicles';
import { getFeatureIcon } from '../utils/featureIcons';
import { maskPhone, maskCPF } from '../utils/masks';
import { openWhatsApp } from '../utils/whatsapp';

export default function VehicleDetail() {
  const { id } = useParams<{ id: string }>();
  const { vehicles, loading } = useVehicles();
  const vehicle = vehicles.find(v => v.id === id);

  const [lazyKm, setLazyKm] = useState<number | null | undefined>(null);
  const [showSimulation, setShowSimulation] = useState(false);
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hasTradeInCar, setHasTradeInCar] = useState(false);

  const similarVehicles = React.useMemo(() => {
    if (!vehicle || !vehicles.length) return [];
    const sorted = [...vehicles]
      .filter(v => v.id !== vehicle.id)
      .sort((a, b) => Math.abs(a.price - vehicle.price) - Math.abs(b.price - vehicle.price));
    return sorted.slice(0, 5);
  }, [vehicle, vehicles]);
  
  const formRef = React.useRef<HTMLFormElement>(null);
  const galleryRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vehicle) {
      setLazyKm(vehicle.km);
    }
  }, [vehicle]);

  useEffect(() => {
    if (lazyKm !== null || !vehicle || !vehicle.slug) return;
    
    let isMounted = true;
    fetch(`/api/unimais/product/${vehicle.slug}/`)
      .then(res => res.text())
      .then(html => {
        if (!isMounted) return;
        const match = html.match(/>(\d+)\s*km\s*</i);
        if (match) {
          const parsed = parseInt(match[1]);
          setLazyKm(parsed);
          vehicle.km = parsed;
        } else {
          setLazyKm(undefined);
        }
      })
      .catch(() => {
        if (isMounted) setLazyKm(undefined);
      });
      
    return () => { isMounted = false; };
  }, [lazyKm, vehicle]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [message, setMessage] = useState('Olá, tenho interesse no veículo. Por favor entre em contato.');

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-[#0543C8] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h2 className="text-xl font-bold text-slate-700">Carregando veículo...</h2>
        </div>
      </div>
    );
  }

  const scrollPrev = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -galleryRef.current.offsetWidth / 2, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: galleryRef.current.offsetWidth / 2, behavior: 'smooth' });
    }
  };

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const msg = `Olá! Tenho interesse no veículo *${vehicle.fullTitle}* (${vehicle.year}) no valor de ${formatCurrency(vehicle.price)}.\n\n` +
      `*Nome:* ${name}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone:* ${phone}\n` +
      `*CPF:* ${cpf}\n` +
      `*Troca:* ${hasTradeInCar ? 'Sim' : 'Não'}\n` +
      `*Mensagem:* ${message}`;

    openWhatsApp(msg);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors text-sm font-bold">
          <ChevronLeft className="w-4 h-4" />
          Voltar para o estoque
        </Link>
      </div>

      {/* Full Width Image Gallery (Carousel) */}
      <div className="relative w-full h-[300px] md:h-[450px] mb-8 group">
        <div 
          ref={galleryRef}
          className="flex h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {vehicle.images.map((img, idx) => (
            <div key={idx} className="min-w-full md:min-w-[60%] lg:min-w-[40%] h-full shrink-0 snap-center px-0">
              <img
                src={img}
                alt={vehicle.fullTitle}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Gallery Controls */}
        <button 
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 z-10 hover:scale-110 transition-transform drop-shadow-md"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
        <button 
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 z-10 hover:scale-110 transition-transform drop-shadow-md"
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Title & Specs Container */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0543C8] tracking-tight leading-tight uppercase">
                  {vehicle.fullTitle}
                </h1>
                <p className="text-slate-900 font-medium text-sm sm:text-base mt-2 uppercase">
                  {vehicle.version}
                </p>
                
                {/* Year & Mileage Specs Row */}
                <div className="flex items-center gap-6 text-slate-900 text-lg mt-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#0543C8]" />
                    <span className="font-medium">{vehicle.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-[#0543C8]" />
                    <span className="font-medium">{lazyKm === null ? 'Buscando...' : lazyKm === undefined ? 'Consulte' : lazyKm === 0 ? '0 KM' : `${lazyKm.toLocaleString('pt-BR')} KM`}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openTradeInModal'))}
                className="w-full md:w-auto bg-[#0543C8] hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-colors text-sm uppercase tracking-wide shrink-0 shadow-md whitespace-nowrap"
              >
                Avalie seu carro na troca
              </button>
            </div>

            {/* Tech Specs Summary */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-6 gap-x-4 text-center">
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wider mb-1">KM</span>
                  <strong className="text-slate-900 font-extrabold text-sm sm:text-base">
                    {lazyKm === null ? 'Buscando...' : lazyKm === undefined ? 'Consulte' : lazyKm === 0 ? '0' : lazyKm.toLocaleString('pt-BR')}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wider mb-1">Combustível</span>
                  <strong className="text-slate-900 font-extrabold text-sm sm:text-base capitalize">{vehicle.fuel}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wider mb-1">Ano</span>
                  <strong className="text-slate-900 font-extrabold text-sm sm:text-base">{vehicle.year}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wider mb-1">Câmbio</span>
                  <strong className="text-slate-900 font-extrabold text-sm sm:text-base capitalize">{vehicle.transmission}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wider mb-1">Portas</span>
                  <strong className="text-slate-900 font-extrabold text-sm sm:text-base">4</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wider mb-1">Cor</span>
                  <strong className="text-slate-900 font-extrabold text-sm sm:text-base capitalize">{vehicle.color}</strong>
                </div>
              </div>
              
              <div className="mt-8 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-6 space-y-1">
                <p>*Informações a respeito de quilometragem e opcionais, favor entrar em contato com a equipe de vendas.</p>
                <p>*Nos reservamos o direito de corrigir, possíveis erros de digitação e/ou publicação.</p>
                <p className="uppercase">*Os valores dos veículos são para pagamento à vista, sem troca.</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-sm font-extrabold text-slate-400 mb-4 uppercase tracking-wider">Sobre este carro</h2>
              <div className="text-slate-700 text-sm leading-relaxed space-y-4">
                <p>
                  VALOR ANUNCIADO VÁLIDO PARA COMPRA SEM TROCA. Todos os nossos carros são PERICIADOS, REVISADOS E COM GARANTIA DE 1 ANO. 
                  Trabalhamos com TODAS AS FINANCEIRAS BANCÁRIAS. Fazemos TROCA COM TROCO, PARCELAMOS A ENTRADA NO CARTÃO DE CRÉDITO e FACILITAMOS SUA APROVAÇÃO NO FINANCIAMENTO. 
                  Nossos veículos possuem HISTÓRICO DE REVISÕES COMPLETO e VISTORIA CAUTELAR APROVADA. PIONEIROS NA REGIÃO DO VALE, com + DE 27 ANOS DE TRADIÇÃO E CONFIANÇA NO MERCADO AUTOMOTIVO.
                  consulte condições, sujeito a erros.
                </p>
              </div>

              
            </div>

            {/* Features */}
            {vehicle.features && vehicle.features.length > 0 && (
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-[15px] font-black text-slate-900 mb-6 uppercase tracking-wider inline-block border-b-2 border-action-orange pb-1">
                  Itens do veículo
                </h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-6 text-sm text-slate-700">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      {getFeatureIcon(feature)}
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Vistoria Section */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-5 h-5 text-[#2C2E38]" />
                <h2 className="text-[15px] font-black text-slate-900 uppercase tracking-wider">Vistoriado</h2>
              </div>
              <p className="text-slate-600 text-sm mb-6">
                Confiança e tranquilidade na compra do seu seminovo.
              </p>
              <h3 className="font-bold text-slate-900 text-sm mb-4">Diversos itens inspecionados</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 mb-6">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2C2E38]" /> Estrutura</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2C2E38]" /> Interior</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2C2E38]" /> Indício de sinistro</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2C2E38]" /> Débitos</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2C2E38]" /> Funilaria</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2C2E38]" /> Restrições</div>
              </div>
              <p className="text-sm font-medium text-slate-900 mb-6">Você mais seguro na hora de fechar o negócio!</p>
              
            </div>
            
          </div>

          {/* Right Column - Sticky Lead Form */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-6 space-y-6">
              
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="flex items-start justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-black text-[#04163D] tracking-tight">
                      {formatCurrency(vehicle.price)}
                    </h2>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setShowSimulation(!showSimulation)}
                    className="bg-[#2C2E38] hover:bg-[#1E2028] text-white text-[11px] font-bold px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                  >
                    Ver parcelas
                  </button>
                </div>

                {showSimulation && (
                  <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-sm text-slate-900 mb-3">Simulação de Financiamento</h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex justify-between">
                        <span>Valor do veículo:</span>
                        <span className="font-medium">{formatCurrency(vehicle.price)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Entrada (40%):</span>
                        <span className="font-medium text-green-600">{formatCurrency(vehicle.price * 0.4)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Valor financiado (60%):</span>
                        <span className="font-medium">{formatCurrency(vehicle.price * 0.6)}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-slate-200 mt-2">
                        <span>Prazo / Taxa:</span>
                        <span className="font-medium">60x de 1,19% a.m.</span>
                      </div>
                      <div className="flex justify-between bg-white p-3 rounded-lg border border-slate-200 mt-3 shadow-sm">
                        <span className="font-bold text-slate-900">Parcela mensal:</span>
                        <span className="font-bold text-[#0543C8]">{formatCurrency(vehicle.monthlyInstallment)}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-2 leading-tight">
                        *Valores aproximados. Sujeito à análise de crédito e aprovação pela instituição financeira.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => openWhatsApp(`Olá! Vi o anúncio do *${vehicle.fullTitle}* (${vehicle.year}) no site de vocês e gostaria de mais informações.`)}
                  className="w-full bg-[#00a81f] hover:bg-green-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mb-4 cursor-pointer text-sm sm:text-base uppercase tracking-wide"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Chamar direto no WhatsApp</span>
                </button>

                <div className="relative flex items-center justify-center mb-4">
                  <div className="border-t border-slate-200 w-full"></div>
                  <span className="bg-slate-50 px-3 text-xs text-slate-400 font-medium uppercase">ou envie uma mensagem</span>
                  <div className="border-t border-slate-200 w-full"></div>
                </div>

                <form ref={formRef} onSubmit={handleSubmitLead} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nome*"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#0543C8] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="E-mail*"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#0543C8] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="CPF*"
                      value={cpf}
                      onChange={e => setCpf(maskCPF(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#0543C8] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Telefone*"
                      value={phone}
                      onChange={e => setPhone(maskPhone(e.target.value))}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#0543C8] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      placeholder="Mensagem*"
                      rows={3}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-[#0543C8] focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                  
                  <label className="flex items-start gap-3 mt-4 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="mt-0.5 rounded border-slate-300 text-[#0543C8] focus:ring-[#0543C8]" 
                      checked={hasTradeInCar}
                      onChange={e => setHasTradeInCar(e.target.checked)}
                    />
                    <span className="text-xs text-slate-500 group-hover:text-slate-700 leading-relaxed">
                      Tenho carro na troca
                    </span>
                  </label>

                  <label className="flex items-start gap-3 mt-2 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 rounded border-slate-300 text-[#0543C8] focus:ring-[#0543C8]" />
                    <span className="text-xs text-slate-500 group-hover:text-slate-700 leading-relaxed">
                      Quero receber contatos por e-mail, WhatsApp e outros canais.
                    </span>
                  </label>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#2C2E38] hover:bg-[#1E2028] text-white font-bold py-4 rounded-lg transition-colors mt-2"
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      
      {/* Similar Vehicles Carousel */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12 relative group">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Você também pode gostar</h2>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => {
                const el = document.getElementById('similar-carousel');
                if (el) el.scrollBy({ left: -344, behavior: 'smooth' });
              }}
              className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors cursor-pointer disabled:opacity-50"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('similar-carousel');
                if (el) el.scrollBy({ left: 344, behavior: 'smooth' });
              }}
              className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div id="similar-carousel" className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {similarVehicles.map((simVehicle) => (
            <div key={simVehicle.id} className="min-w-[280px] md:min-w-[320px] w-[280px] md:w-[320px] shrink-0 snap-start">
              <VehicleCard vehicle={simVehicle} />
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#04163D] shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            
            <a 
              href="tel:19993314310"
              className="flex-1 w-full bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Ligue agora: (19) 99331-4310
            </a>

            <a 
              href="mailto:contato@unimaisveiculos.com.br"
              className="flex-1 w-full bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Atendimento por Email
            </a>

            <button 
              onClick={() => openWhatsApp(`Olá! Vi o anúncio do *${vehicle.fullTitle}* (${vehicle.year}) no site de vocês e gostaria de mais informações.`)}
              className="flex-1 w-full bg-[#00a81f] hover:bg-green-600 text-white font-bold py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              Atendimento via WhatsApp
            </button>

          </div>
        </div>
      </div>
      
      
    </div>
  );
}
