import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Calendar, Gauge, MapPin, CheckCircle2 } from 'lucide-react';
import { Vehicle } from '../../data/mockVehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect?: (vehicle: Vehicle) => void;
}

export default function VehicleCard({ vehicle, onSelect }: VehicleCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex] = useState(0);
  const [lazyKm, setLazyKm] = useState<number | null | undefined>(vehicle.km);
  const navigate = useNavigate();

  useEffect(() => {
    if (lazyKm !== null || !vehicle.slug) return;
    
    let isMounted = true;
    fetch(`/api/unimais/product/${vehicle.slug}/`)
      .then(res => res.text())
      .then(html => {
        if (!isMounted) return;
        const match = html.match(/>(\d+)\s*km\s*</i);
        if (match) {
          const parsed = parseInt(match[1]);
          setLazyKm(parsed);
          vehicle.km = parsed; // Cache it in the object
        } else {
          setLazyKm(undefined); // undefined means tried and failed
        }
      })
      .catch(() => {
        if (isMounted) setLazyKm(undefined);
      });
      
    return () => { isMounted = false; };
  }, [lazyKm, vehicle.slug, vehicle]);

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(vehicle);
    } else {
      navigate(`/veiculo/${vehicle.id}`);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer relative"
    >
      {/* Image Gallery Container */}
      <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
        <img
          src={vehicle.images[activeImageIndex] || vehicle.images[0]}
          alt={vehicle.fullTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
          <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
            1/{vehicle.photoCount}
          </span>
          {vehicle.badge && (
            <span className="bg-action-orange text-white text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md">
              {vehicle.badge}
            </span>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 ${
            isFavorite 
              ? 'bg-[#2C2E38] text-white' 
              : 'bg-white/90 text-slate-700 hover:bg-white hover:text-[#2C2E38]'
          }`}
          title="Favoritar"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Bottom Image Overlay Badges */}
        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 flex-wrap z-10">
          {vehicle.isNew && (
            <span className="bg-action-orange text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              0 Km
            </span>
          )}

          {vehicle.isInspected && (
            <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Vistoriado
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Title */}
          <h3 className="font-extrabold text-[#0543C8] text-base leading-tight group-hover:text-blue-800 transition-colors">
            {vehicle.fullTitle}
          </h3>
          {/* Version */}
          <p className="text-slate-900 text-xs mt-0.5 line-clamp-1 font-medium uppercase">
            {vehicle.version}
          </p>

          {/* Year & Mileage Specs Row */}
          <div className="flex items-center gap-4 text-slate-900 text-sm mt-3 pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#0543C8]" />
              <span>{vehicle.year}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gauge className="w-4 h-4 text-[#0543C8]" />
              <span>{lazyKm === null ? 'Buscando...' : lazyKm === undefined ? 'Consulte' : lazyKm === 0 ? '0 Km' : `${lazyKm.toLocaleString('pt-BR')} KM`}</span>
            </div>
          </div>
        </div>

        {/* Price & Finance Callout */}
        <div className="pt-2 border-t border-slate-100 space-y-1">
          <div>
            <span className="font-extrabold text-slate-900 text-2xl tracking-tight block">
              {formatCurrency(vehicle.price)}
            </span>
            <span className="text-slate-600 text-xs font-normal block mt-1">
              a partir de <strong className="font-extrabold text-slate-900">{formatCurrency(vehicle.monthlyInstallment)}/mês*</strong>
            </span>
            <span className="text-slate-400 text-[10px] block mt-0.5">
              *Valor estimado. Simule a sua parcela.
            </span>
          </div>

          {/* Action Button - Single full width "Ver parcelas" */}
          <div className="pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
              className="w-full bg-[#0543C8] hover:bg-blue-800 text-white font-extrabold text-sm py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-1 shadow-sm uppercase"
            >
              <span>Ver parcelas</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
