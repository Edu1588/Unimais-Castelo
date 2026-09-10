import { useState, useEffect } from 'react';
import { Vehicle, BRANDS } from '../data/mockVehicles';

let cachedVehicles: Vehicle[] | null = null;
let fetchPromise: Promise<Vehicle[]> | null = null;

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(cachedVehicles || []);
  const [loading, setLoading] = useState<boolean>(!cachedVehicles);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedVehicles) {
      setVehicles(cachedVehicles);
      setLoading(false);
      return;
    }

    if (!fetchPromise) {
      const fetchAllPages = async () => {
        try {
          const firstRes = await fetch('/api/unimais/wp-json/wc/store/products?per_page=100&page=1');
          if (!firstRes.ok) throw new Error('Falha ao carregar os veículos');
          const totalPages = parseInt(firstRes.headers.get('x-wp-totalpages') || '1', 10);
          
          let allData = await firstRes.json();
          
          if (totalPages > 1) {
            const promises = [];
            for (let i = 2; i <= totalPages; i++) {
              promises.push(
                fetch(`/api/unimais/wp-json/wc/store/products?per_page=100&page=${i}`)
                  .then(res => res.ok ? res.json() : [])
              );
            }
            const restPages = await Promise.all(promises);
            for (const pageData of restPages) {
              allData = allData.concat(pageData);
            }
          }
          return allData;
        } catch (e) {
          throw e;
        }
      };

      fetchPromise = fetchAllPages()
        .then((data: any[]) => {
          const mapped: Vehicle[] = data.map(c => {
            const getAttr = (name: string) => c.attributes?.find((a: any) => a.name === name)?.terms?.[0]?.name || '';
            
            // Extract brand robustly: check if any category matches our known BRANDS list
            let brand = 'Marca';
            if (c.categories && Array.isArray(c.categories)) {
              const knownBrand = c.categories.find(cat => 
                BRANDS.some(b => b.name.toLowerCase() === cat.name.toLowerCase())
              );
              
              if (knownBrand) {
                brand = knownBrand.name;
              } else {
                brand = c.categories.find((cat: any) => cat.slug !== 'oferta' && cat.slug !== 'novos')?.name || 'Marca';
              }
            }
            
            const price = parseInt(c.prices.price) / 100;
            const pv = price * 0.6; // 60% financed (40% down payment)
            const i = 0.0119; // 1.19% per month
            const n = 60; // 60 months
            const pmt = (pv * i) / (1 - Math.pow(1 + i, -n));

            const desc = c.description || '';
            const features: string[] = [];
            const match = desc.match(/<li>(.*?)<\/li>/g);
            if (match) {
              match.forEach((m: string) => features.push(m.replace(/<\/?li>/g, '')));
            }

            const kmStr = getAttr('Km');
            const km = kmStr ? parseInt(kmStr.replace(/\D/g, '')) : null;

            let badge = undefined;
            // Os carros "Acabou de chegar" (sem fotos reais) sobem no sistema com exatamente 8 imagens (renders 3D)
            if (c.images?.length <= 8) {
              badge = 'Acabou de chegar';
            }

            return {
              id: c.id.toString(),
              slug: c.slug,
              brand: brand,
              name: c.name,
              fullTitle: c.name,
              version: getAttr('Versão') || '',
              price: price,
              monthlyInstallment: Math.round(pmt),
              year: getAttr('Ano') || '2020',
              yearNum: parseInt(getAttr('Ano') || '2020'),
              km: km,
              isNew: getAttr('Condição') === 'Novo',
              sellerType: 'Loja',
              location: getAttr('Local') || 'Indaiatuba (SP)',
              storeName: getAttr('Local') || 'Loja Unimais',
              transmission: (getAttr('Câmbio') || 'Automático') as 'Automático' | 'Manual',
              fuel: (getAttr('Combustível') || 'Flex') as any,
              bodyType: (getAttr('Carroceria') || 'SUV') as any,
              color: (getAttr('Cor') || 'Branco') as any,
              isFipeBelow: c.categories?.some((cat: any) => cat.slug === 'oferta') || false,
              isInspected: true,
              badge: badge,
              photoCount: c.images?.length || 0,
              images: c.images?.map((img: any) => img.src) || [],
              features: features,
              vehicleType: 'car'
            };
          });
          
          cachedVehicles = mapped;
          return mapped;
        });
    }

    fetchPromise
      .then(mapped => {
        setVehicles(mapped);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { vehicles, loading, error };
}
