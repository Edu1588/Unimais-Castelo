import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  X, 
  Car, 
  Bike, 
  Info, 
  RotateCcw,
  SlidersHorizontal
} from 'lucide-react';
import { BRANDS } from '../../data/mockVehicles';

export interface FilterState {
  vehicleType: 'car' | 'motorcycle';
  location: string;
  selectedBrand: string;
  minYear: string;
  maxYear: string;
  specificYear: number | null;
  condition: 'all' | 'usado' | 'novo';
  sellers: string[];
  minPrice: string;
  maxPrice: string;
  fipeBelowOnly: boolean;
  minKm: string;
  maxKm: string;
  inspectedOnly: boolean;
  transmission: string;
  fuel: string;
  bodyType: string;
  color: string;
  store: string;
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalResults: number;
  onReset: () => void;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export default function FilterSidebar({
  filters,
  setFilters,
  totalResults,
  onReset,
  isMobileOpen,
  setIsMobileOpen
}: FilterSidebarProps) {
  const [brandSearch, setBrandSearch] = useState('');
  
  // Accordion state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    brand: true,
    year: true,
    condition: true,
    seller: true,
    price: true,
    km: true,
    inspected: true,
    performance: false,
    items: false,
    style: false,
    conservation: false,
    specials: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Count active filters
  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.location && filters.location !== 'Campinas') count++;
    if (filters.selectedBrand) count++;
    if (filters.minYear || filters.maxYear || filters.specificYear) count++;
    if (filters.condition !== 'all') count++;
    if (filters.sellers.length > 0) count++;
    if (filters.minPrice || filters.maxPrice) count++;
    if (filters.fipeBelowOnly) count++;
    if (filters.minKm || filters.maxKm) count++;
    if (filters.inspectedOnly) count++;
    if (filters.transmission) count++;
    if (filters.fuel) count++;
    if (filters.bodyType) count++;
    if (filters.color) count++;
    if (filters.store) count++;
    return count;
  };

  const activeCount = getActiveFilterCount();

  const filteredBrands = BRANDS.filter(b => 
    b.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

  const handleSellerChange = (seller: string) => {
    setFilters(prev => {
      const exists = prev.sellers.includes(seller);
      const newSellers = exists 
        ? prev.sellers.filter(s => s !== seller)
        : [...prev.sellers, seller];
      return { ...prev, sellers: newSellers };
    });
  };

  return (
    <aside className={`
      bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-5 text-slate-800 text-sm
      ${isMobileOpen ? 'block' : 'hidden lg:block'}
    `}>
      {/* Mobile Header if Drawer */}
      <div className="lg:hidden flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2 font-bold text-base text-slate-900">
          <SlidersHorizontal className="w-5 h-5 text-primary" />
          <span>Filtros ({activeCount})</span>
        </div>
        <button 
          onClick={() => setIsMobileOpen?.(false)}
          className="p-1 hover:bg-slate-100 rounded-lg text-slate-500"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* 1. Filtros Aplicados Header */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
            <span>Filtros aplicados</span>
            {activeCount > 0 && (
              <span className="bg-action-orange text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {activeCount}
              </span>
            )}
          </div>
          {activeCount > 0 && (
            <button
              onClick={onReset}
              className="text-slate-500 hover:text-primary text-xs underline font-medium flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpar todos</span>
            </button>
          )}
        </div>

        {/* Active Filter Chips */}
        {activeCount > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {filters.location && (
              <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
                {filters.location}
                <button onClick={() => setFilters(prev => ({ ...prev, location: '' }))} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.selectedBrand && (
              <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
                {filters.selectedBrand}
                <button onClick={() => setFilters(prev => ({ ...prev, selectedBrand: '' }))} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.specificYear && (
              <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
                Ano {filters.specificYear}
                <button onClick={() => setFilters(prev => ({ ...prev, specificYear: null }))} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.condition !== 'all' && (
              <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 uppercase">
                {filters.condition}
                <button onClick={() => setFilters(prev => ({ ...prev, condition: 'all' }))} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.inspectedOnly && (
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200">
                Vistoriado
                <button onClick={() => setFilters(prev => ({ ...prev, inspectedOnly: false }))} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.store && (
              <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200">
                {filters.store}
                <button onClick={() => setFilters(prev => ({ ...prev, store: '' }))} className="hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 pt-4 space-y-5">
        {/* 4. Marca */}
        <div className="border-t border-slate-100 pt-4">
          <div 
            onClick={() => toggleSection('brand')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
              <span>Marca</span>
              <Info className="w-3.5 h-3.5 text-slate-400" />
            </div>
            {openSections.brand ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.brand && (
            <div className="mt-3 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={brandSearch}
                  onChange={e => setBrandSearch(e.target.value)}
                  placeholder="Buscar por marca"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              {/* Brand Grid */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {filteredBrands.map(b => {
                  const isSelected = filters.selectedBrand.toLowerCase() === b.name.toLowerCase();
                  return (
                    <button
                      key={b.id}
                      onClick={() => setFilters(prev => ({
                        ...prev,
                        selectedBrand: isSelected ? '' : b.name
                      }))}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all ${
                        isSelected 
                          ? 'border-primary bg-primary/5 text-primary font-bold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 bg-white p-1 ${isSelected ? 'ring-2 ring-primary/20' : ''}`}>
                        <img src={b.logo} alt={b.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[11px] truncate w-full text-center">{b.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 5. Ano */}
        <div className="border-t border-slate-100 pt-4">
          <div 
            onClick={() => toggleSection('year')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <h4 className="font-bold text-slate-900 text-sm">Ano</h4>
            {openSections.year ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.year && (
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1.5 font-medium">Escolher um intervalo</p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    value={filters.minYear}
                    onChange={e => setFilters(prev => ({ ...prev, minYear: e.target.value, specificYear: null }))}
                    placeholder="Ano mínimo"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <input
                    type="number"
                    value={filters.maxYear}
                    onChange={e => setFilters(prev => ({ ...prev, maxYear: e.target.value, specificYear: null }))}
                    placeholder="Ano máximo"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-1.5 font-medium">Escolher um ano específico</p>
                <div className="grid grid-cols-4 gap-1.5">
                  {years.map(yr => {
                    const isSelected = filters.specificYear === yr;
                    return (
                      <button
                        key={yr}
                        onClick={() => setFilters(prev => ({
                          ...prev,
                          specificYear: isSelected ? null : yr,
                          minYear: '',
                          maxYear: ''
                        }))}
                        className={`py-1 rounded-full border text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-primary text-white border-primary shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {yr}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 6. Usado e 0 Km */}
        <div className="border-t border-slate-100 pt-4">
          <div 
            onClick={() => toggleSection('condition')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <h4 className="font-bold text-slate-900 text-sm">Usado e 0 Km</h4>
            {openSections.condition ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.condition && (
            <div className="mt-2 space-y-2 text-xs">
              <label className="flex items-center justify-between cursor-pointer text-slate-700 hover:text-slate-900">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    checked={filters.condition === 'all'}
                    onChange={() => setFilters(prev => ({ ...prev, condition: 'all' }))}
                    className="accent-primary"
                  />
                  <span>Todos os veículos</span>
                </div>
                
              </label>

              <label className="flex items-center justify-between cursor-pointer text-slate-700 hover:text-slate-900">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    checked={filters.condition === 'usado'}
                    onChange={() => setFilters(prev => ({ ...prev, condition: 'usado' }))}
                    className="accent-primary"
                  />
                  <span>Usado / Seminovo</span>
                </div>
                
              </label>

              <label className="flex items-center justify-between cursor-pointer text-slate-700 hover:text-slate-900">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="condition"
                    checked={filters.condition === 'novo'}
                    onChange={() => setFilters(prev => ({ ...prev, condition: 'novo' }))}
                    className="accent-primary"
                  />
                  <span>0 Km (Novo)</span>
                </div>
                
              </label>
            </div>
          )}
        </div>



        {/* 8. Preço */}
        <div className="border-t border-slate-100 pt-4">
          <div 
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <h4 className="font-bold text-slate-900 text-sm">Preço</h4>
            {openSections.price ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.price && (
            <div className="mt-3 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={e => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                  placeholder="Preço mínimo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={e => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                  placeholder="Preço máximo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* 9. Quilometragem */}
        <div className="border-t border-slate-100 pt-4">
          <div 
            onClick={() => toggleSection('km')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <h4 className="font-bold text-slate-900 text-sm">Quilometragem</h4>
            {openSections.km ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.km && (
            <div className="mt-3 space-y-1.5">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  value={filters.minKm}
                  onChange={e => setFilters(prev => ({ ...prev, minKm: e.target.value }))}
                  placeholder="Km mínimo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <input
                  type="number"
                  value={filters.maxKm}
                  onChange={e => setFilters(prev => ({ ...prev, maxKm: e.target.value }))}
                  placeholder="Km máximo"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <p className="text-[11px] text-slate-400">Ex.: 20.000</p>
            </div>
          )}
        </div>

        {/* 10. Vistoriado Toggle */}
        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-xs text-slate-900">Vistoriado</p>
              <p className="text-[11px] text-slate-500">Seminovos com laudo de vistoria</p>
            </div>
            <button
              onClick={() => setFilters(prev => ({ ...prev, inspectedOnly: !prev.inspectedOnly }))}
              className={`relative w-10 h-6 rounded-full transition-colors ${
                filters.inspectedOnly ? 'bg-primary' : 'bg-slate-300'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  filters.inspectedOnly ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* 11. Performance Accordion */}
        <div className="border-t border-slate-100 pt-4">
          <div 
            onClick={() => toggleSection('performance')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <h4 className="font-bold text-slate-900 text-sm">Performance</h4>
            {openSections.performance ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.performance && (
            <div className="mt-3 space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Câmbio</label>
                <select
                  value={filters.transmission}
                  onChange={e => setFilters(prev => ({ ...prev, transmission: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                >
                  <option value="">Todos os câmbios</option>
                  <option value="Automático">Automático</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Combustível</label>
                <select
                  value={filters.fuel}
                  onChange={e => setFilters(prev => ({ ...prev, fuel: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                >
                  <option value="">Todos os combustíveis</option>
                  <option value="Flex">Flex</option>
                  <option value="Gasolina">Gasolina</option>
                  <option value="Híbrido">Híbrido</option>
                  <option value="Elétrico">Elétrico</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 12. Itens de Série Accordion */}
        <div className="border-t border-slate-100 pt-4">
          <div 
            onClick={() => toggleSection('items')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <h4 className="font-bold text-slate-900 text-sm">Itens de Série</h4>
            {openSections.items ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.items && (
            <div className="mt-2 space-y-1.5 text-xs text-slate-600">
              {['Conforto e Conveniência', 'Direção', 'Outros', 'Segurança', 'Tecnologia e Conectividade'].map(item => (
                <div key={item} className="flex items-center justify-between p-1.5 hover:bg-slate-50 rounded cursor-pointer">
                  <span>{item}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 13. Estilo & Estrutura Accordion */}
        <div className="border-t border-slate-100 pt-4">
          <div 
            onClick={() => toggleSection('style')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <h4 className="font-bold text-slate-900 text-sm">Estilo & Estrutura</h4>
            {openSections.style ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.style && (
            <div className="mt-3 space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Carroceria</label>
                <select
                  value={filters.bodyType}
                  onChange={e => setFilters(prev => ({ ...prev, bodyType: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                >
                  <option value="">Todas as carrocerias</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Hatch">Hatch</option>
                  <option value="Pick-up">Pick-up</option>
                  <option value="Crossover">Crossover</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Cor</label>
                <select
                  value={filters.color}
                  onChange={e => setFilters(prev => ({ ...prev, color: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
                >
                  <option value="">Todas as cores</option>
                  <option value="Branco">Branco</option>
                  <option value="Preto">Preto</option>
                  <option value="Prata">Prata</option>
                  <option value="Cinza">Cinza</option>
                  <option value="Vermelho">Vermelho</option>
                  <option value="Azul">Azul</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 14. Conservação & Procedência Accordion */}
        <div className="border-t border-slate-100 pt-4">
          <div 
            onClick={() => toggleSection('conservation')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <h4 className="font-bold text-slate-900 text-sm">Conservação & Procedência</h4>
            {openSections.conservation ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.conservation && (
            <div className="mt-2 space-y-1.5 text-xs text-slate-600">
              {['Documentação & Regularização', 'Final da Placa', 'Garantia & Revisões', 'Leilão'].map(item => (
                <div key={item} className="flex items-center justify-between p-1.5 hover:bg-slate-50 rounded cursor-pointer">
                  <span>{item}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 15. Especiais Unimais Accordion */}
        <div className="border-t border-slate-100 pt-4 pb-2">
          <div 
            onClick={() => toggleSection('specials')}
            className="flex items-center justify-between cursor-pointer py-1"
          >
            <h4 className="font-bold text-slate-900 text-sm">Lojas Unimais & Ofertas</h4>
            {openSections.specials ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </div>

          {openSections.specials && (
            <div className="mt-3 space-y-2">
              <label className="text-xs font-semibold text-slate-700 block mb-1">Selecione a Loja</label>
              <select
                value={filters.store}
                onChange={e => setFilters(prev => ({ ...prev, store: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800"
              >
                <option value="">Loja Castelo - Campinas</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
