import React from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Vehicle } from '../../data/mockVehicles';
import VehicleCard from './VehicleCard';

interface VehicleGridProps {
  vehicles: Vehicle[];
  totalResults: number;
  sortBy: string;
  setSortBy: (sort: string) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
  onOpenMobileFilters: () => void;
  activeFilterCount: number;
  onResetFilters: () => void;
  loading?: boolean;
  error?: string | null;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

export default function VehicleGrid({
  vehicles,
  totalResults,
  sortBy,
  setSortBy,
  onSelectVehicle,
  onOpenMobileFilters,
  activeFilterCount,
  onResetFilters,
  loading,
  error,
  hasMore,
  onLoadMore
}: VehicleGridProps) {
  return (
    <div className="flex-1 space-y-4">
      {/* Top Header Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-extrabold text-slate-900 text-lg md:text-xl">
            Carros zero e seminovos, vem pra Unimais Castelo
          </h1>
          <p className="text-slate-500 text-xs mt-0.5 font-medium">
            <strong className="text-slate-900 font-bold">{vehicles.length}</strong> de {totalResults} anúncios encontrados
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          {/* Mobile Filter Button */}
          <button
            onClick={onOpenMobileFilters}
            className="lg:hidden flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-3.5 py-2 rounded-lg border border-slate-200 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            <span>Filtros</span>
            {activeFilterCount > 0 && (
              <span className="bg-action-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="hidden md:inline text-slate-500">Ordenar Por:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer"
            >
              <option value="relevance">Mais relevantes</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
              <option value="km-asc">Menor KM</option>
              <option value="year-desc">Ano mais novo</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Vehicle Cards */}
      {loading ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-xs flex flex-col justify-center items-center h-64">
           <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
           <p className="mt-4 text-slate-500 font-medium">Carregando estoque...</p>
        </div>
      ) : error ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-xs flex flex-col justify-center items-center h-64">
           <p className="text-red-500 font-medium">{error}</p>
        </div>
      ) : vehicles.length > 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {vehicles.map(vehicle => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelect={onSelectVehicle}
              />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center pt-4 pb-2">
              <button
                onClick={onLoadMore}
                className="bg-action-orange hover:bg-orange-600 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Ver mais veículos</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-medium">
                  +{totalResults - vehicles.length}
                </span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
            <SlidersHorizontal className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Nenhum veículo encontrado</h3>
            <p className="text-slate-500 text-xs mt-1 max-w-md mx-auto">
              Não encontramos opções com os filtros selecionados. Tente ajustar a busca ou limpar os filtros para ver mais veículos.
            </p>
          </div>
          <button
            onClick={onResetFilters}
            className="bg-primary hover:bg-slate-900 text-white font-bold text-xs px-6 py-2.5 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}
    </div>
  );
}
