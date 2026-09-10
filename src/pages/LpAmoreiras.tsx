import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerTop from '../components/lp-amoreiras/BannerTop';
import FilterSidebar, { FilterState } from '../components/lp-amoreiras/FilterSidebar';
import VehicleGrid from '../components/lp-amoreiras/VehicleGrid';
import FAQ from '../components/FAQ';
import { useVehicles } from '../hooks/useVehicles';

const initialFilters: FilterState = {
  vehicleType: 'car',
  location: '',
  selectedBrand: '',
  minYear: '',
  maxYear: '',
  specificYear: null,
  condition: 'all',
  sellers: [],
  minPrice: '',
  maxPrice: '',
  fipeBelowOnly: false,
  minKm: '',
  maxKm: '',
  inspectedOnly: false,
  transmission: '',
  fuel: '',
  bodyType: '',
  color: '',
  store: ''
};

export default function LpAmoreiras() {
  const { vehicles, loading, error } = useVehicles();
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [sortBy, setSortBy] = useState('relevance');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);

  const navigate = useNavigate();

    // Listen for openMobileFilters event
  useEffect(() => {
    const handleOpenMobileFilters = () => setIsMobileFiltersOpen(true);
    window.addEventListener('openMobileFilters', handleOpenMobileFilters);
    return () => window.removeEventListener('openMobileFilters', handleOpenMobileFilters);
  }, []);

  const resetFilters = () => {
    setFilters(initialFilters);
    setVisibleCount(20);
  };

  // Compute filtered vehicles
  const filteredVehicles = useMemo(() => {
    return vehicles.filter(v => {
      // Vehicle type (car/motorcycle)
      if (v.vehicleType !== filters.vehicleType) return false;

      // Location
      if (filters.location) {
        const locSearch = filters.location.toLowerCase();
        if (!v.location.toLowerCase().includes(locSearch) && !v.storeName.toLowerCase().includes(locSearch)) {
          return false;
        }
      }

      // Brand
      if (filters.selectedBrand) {
        if (v.brand.toLowerCase() !== filters.selectedBrand.toLowerCase()) return false;
      }

      // Specific Year
      if (filters.specificYear !== null) {
        if (v.yearNum !== filters.specificYear) return false;
      } else {
        // Year range
        if (filters.minYear && v.yearNum < parseInt(filters.minYear)) return false;
        if (filters.maxYear && v.yearNum > parseInt(filters.maxYear)) return false;
      }

      // Condition (usado vs 0km)
      if (filters.condition === 'novo' && !v.isNew) return false;
      if (filters.condition === 'usado' && v.isNew) return false;

      // Sellers
      if (filters.sellers.length > 0) {
        if (!filters.sellers.includes(v.sellerType)) return false;
      }

      // Price range
      if (filters.minPrice && v.price < parseFloat(filters.minPrice)) return false;
      if (filters.maxPrice && v.price > parseFloat(filters.maxPrice)) return false;

      // Abaixo da Fipe
      if (filters.fipeBelowOnly && !v.isFipeBelow) return false;

      // Km range
      if (filters.minKm && v.km < parseInt(filters.minKm)) return false;
      if (filters.maxKm && v.km > parseInt(filters.maxKm)) return false;

      // Inspected
      if (filters.inspectedOnly && !v.isInspected) return false;

      // Transmission
      if (filters.transmission && v.transmission !== filters.transmission) return false;

      // Fuel
      if (filters.fuel && v.fuel !== filters.fuel) return false;

      // Body type
      if (filters.bodyType && v.bodyType !== filters.bodyType) return false;

      // Color
      if (filters.color && v.color !== filters.color) return false;

      // Store
      if (filters.store && v.storeName !== filters.store) return false;

      return true;
    });
  }, [filters, vehicles]);

  // Compute sorted vehicles
  const sortedVehicles = useMemo(() => {
    const list = [...filteredVehicles];
    
    const compareNewArrivals = (a: Vehicle, b: Vehicle) => {
      const aIsNewArrival = a.badge?.toLowerCase() === 'acabou de chegar';
      const bIsNewArrival = b.badge?.toLowerCase() === 'acabou de chegar';
      if (aIsNewArrival && !bIsNewArrival) return 1;
      if (!aIsNewArrival && bIsNewArrival) return -1;
      return 0; // Both are new arrivals or both are normal
    };

    switch (sortBy) {
      case 'price-asc':
        return list.sort((a, b) => {
          const arrivalDiff = compareNewArrivals(a, b);
          if (arrivalDiff !== 0) return arrivalDiff;
          return a.price - b.price;
        });
      case 'price-desc':
        return list.sort((a, b) => {
          const arrivalDiff = compareNewArrivals(a, b);
          if (arrivalDiff !== 0) return arrivalDiff;
          return b.price - a.price;
        });
      case 'km-asc':
        return list.sort((a, b) => {
          const arrivalDiff = compareNewArrivals(a, b);
          if (arrivalDiff !== 0) return arrivalDiff;
          return (a.km || 0) - (b.km || 0);
        });
      case 'year-desc':
        return list.sort((a, b) => {
           const arrivalDiff = compareNewArrivals(a, b);
           if (arrivalDiff !== 0) return arrivalDiff;
           return b.yearNum - a.yearNum;
        });
      case 'relevance':
      default:
        return list.sort((a, b) => {
          const arrivalDiff = compareNewArrivals(a, b);
          if (arrivalDiff !== 0) return arrivalDiff;
          
          const aFeatured = a.photoCount >= 7 ? 1 : 0;
          const bFeatured = b.photoCount >= 7 ? 1 : 0;
          return bFeatured - aFeatured; // Featured first
        });
    }
  }, [filteredVehicles, sortBy]);

  // Reset visible limit on filter or sort change
  const handleSetFilters: typeof setFilters = (value) => {
    setVisibleCount(20);
    setFilters(value);
  };

  const handleSetSortBy = (sort: string) => {
    setVisibleCount(20);
    setSortBy(sort);
  };

  // Slice displayed vehicles to visible limit (20 by default)
  const displayedVehicles = useMemo(() => {
    return sortedVehicles.slice(0, visibleCount);
  }, [sortedVehicles, visibleCount]);

  // Count active filters
  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.location) count++;
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

  return (
    <div className="bg-slate-50/70 min-h-screen py-6 md:py-8">
      <div className="max-w-max-width mx-auto px-gutter">
        {/* Top Horizontal Banner Space */}
        <BannerTop />

        {/* Showroom Layout Grid (Sidebar + Main Content) */}
        <div id="estoque" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Desktop Filter Sidebar (3 cols) */}
          <div id="filtros" className="lg:col-span-3 lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <FilterSidebar
              filters={filters}
              setFilters={handleSetFilters}
              totalResults={sortedVehicles.length}
              onReset={resetFilters}
            />
          </div>

          {/* Main Vehicle Showroom Grid (9 cols) */}
          <div className="lg:col-span-9">
            <VehicleGrid
              vehicles={displayedVehicles}
              totalResults={sortedVehicles.length}
              sortBy={sortBy}
              setSortBy={handleSetSortBy}
              onSelectVehicle={(v) => navigate('/veiculo/' + v.id)}
              onOpenMobileFilters={() => setIsMobileFiltersOpen(true)}
              activeFilterCount={activeCount}
              onResetFilters={resetFilters}
              loading={loading}
              error={error}
              hasMore={displayedVehicles.length < sortedVehicles.length}
              onLoadMore={() => setVisibleCount(prev => prev + 20)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer Modal */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-900/70 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto p-4 animate-in slide-in-from-right duration-200">
            <FilterSidebar
              filters={filters}
              setFilters={handleSetFilters}
              totalResults={sortedVehicles.length}
              onReset={resetFilters}
              isMobileOpen={true}
              setIsMobileOpen={setIsMobileFiltersOpen}
            />
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="mt-12">
        <FAQ />
      </div>
    </div>
  );
}
