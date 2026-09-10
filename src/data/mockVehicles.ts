export interface Vehicle {
  id: string;
  slug?: string;
  brand: string;
  name: string;
  fullTitle: string;
  version: string;
  price: number;
  monthlyInstallment: number;
  year: string;
  yearNum: number;
  km: number | null;
  isNew: boolean;
  sellerType: 'Loja' | 'Concessionária' | 'Pessoa Física';
  location: string;
  storeName: string;
  transmission: 'Automático' | 'Manual';
  fuel: 'Flex' | 'Gasolina' | 'Híbrido' | 'Elétrico' | 'Diesel';
  bodyType: 'SUV' | 'Sedan' | 'Hatch' | 'Pick-up' | 'Crossover';
  color: 'Branco' | 'Preto' | 'Prata' | 'Cinza' | 'Vermelho' | 'Azul';
  isFipeBelow: boolean;
  isInspected: boolean;
  badge?: string;
  photoCount: number;
  has360?: boolean;
  images: string[];
  features: string[];
  vehicleType: 'car' | 'motorcycle';
}

export const BRANDS = [
  { id: 'bmw', name: 'BMW', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/bmw.png' },
  { id: 'chevrolet', name: 'Chevrolet', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/chevrolet.png' },
  { id: 'volkswagen', name: 'Volkswagen', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/volkswagen.png' },
  { id: 'hyundai', name: 'Hyundai', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/hyundai.png' },
  { id: 'toyota', name: 'Toyota', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/toyota.png' },
  { id: 'honda', name: 'Honda', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/honda.png' },
  { id: 'jeep', name: 'Jeep', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/jeep.png' },
  { id: 'fiat', name: 'Fiat', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/fiat.png' },
  { id: 'ford', name: 'Ford', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/ford.png' },
  { id: 'renault', name: 'Renault', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/renault.png' },
  { id: 'nissan', name: 'Nissan', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/nissan.png' },
  { id: 'peugeot', name: 'Peugeot', logo: 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/peugeot.png' }
];

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: '1',
    brand: 'BMW',
    name: 'X4',
    fullTitle: 'BMW X4',
    version: '2.0 16v Gasolina Xdrive30i M Sport Steptronic',
    price: 365900,
    monthlyInstallment: 5140,
    year: '2023/2024',
    yearNum: 2024,
    km: 21118,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Gasolina',
    bodyType: 'SUV',
    color: 'Cinza',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 18,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Teto Solar Panorâmico', 'Pacote M Sport', 'Trator XDrive 4x4', 'Bancos bi-partido', 'Painel TFT 12.3"', 'Direção Elétrica', 'Distribuição eletrônica de frenagem']
  },
  {
    id: '2',
    brand: 'BMW',
    name: 'X7',
    fullTitle: 'BMW X7',
    version: '4.4 V8 GASOLINA M50i STEPTRONIC',
    price: 589900,
    monthlyInstallment: 8287,
    year: '2021/2022',
    yearNum: 2022,
    km: 74959,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Gasolina',
    bodyType: 'SUV',
    color: 'Cinza',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 24,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Motor V8 TwinPower Turbo 530cv', 'Tração xDrive 4x4', 'Som Harman Kardon', 'Suspensão a ar pneumática', 'Comando de áudio no volante', 'Assistente de partida em rampa']
  },
  {
    id: '3',
    brand: 'Chevrolet',
    name: 'ONIX',
    fullTitle: 'CHEVROLET ONIX',
    version: '1.0 TURBO FLEX LT MANUAL',
    price: 74900,
    monthlyInstallment: 1052,
    year: '2023/2023',
    yearNum: 2023,
    km: 32100,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Manual',
    fuel: 'Flex',
    bodyType: 'Hatch',
    color: 'Branco',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 12,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Central MyLink 8"', 'Wi-Fi nativo', '6 Airbags de série', 'Ar condicionado', 'Direção elétrica']
  },
  {
    id: '4',
    brand: 'Chevrolet',
    name: 'TRACKER',
    fullTitle: 'CHEVROLET TRACKER',
    version: '1.2 TURBO FLEX PREMIER AUTOMATICO',
    price: 119900,
    monthlyInstallment: 1684,
    year: '2022/2023',
    yearNum: 2023,
    km: 29800,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Flex',
    bodyType: 'SUV',
    color: 'Azul',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 16,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Teto solar elétrico', 'Easy Park (estaciona sozinho)', 'Alerta de colisão frontal', 'Carregador sem fio']
  },
  {
    id: '5',
    brand: 'Hyundai',
    name: 'HB20',
    fullTitle: 'HYUNDAI HB20',
    version: '1.0 FLEX EVOLUTION MANUAL',
    price: 68900,
    monthlyInstallment: 968,
    year: '2022/2023',
    yearNum: 2023,
    km: 38400,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Manual',
    fuel: 'Flex',
    bodyType: 'Hatch',
    color: 'Prata',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 14,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Painel digital', 'Central Bluelink 8"', 'Rodas de liga leve', 'Sensor de ré', 'Vidros elétricos nas 4 portas']
  },
  {
    id: '6',
    brand: 'Hyundai',
    name: 'CRETA',
    fullTitle: 'HYUNDAI CRETA',
    version: '1.0 TGDI FLEX PLATINUM AUTOMATICO',
    price: 128900,
    monthlyInstallment: 1811,
    year: '2023/2023',
    yearNum: 2023,
    km: 26400,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Flex',
    bodyType: 'SUV',
    color: 'Prata',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 17,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Câmera 360°', 'Ventilação no banco do motorista', 'Teto solar panorâmico', 'Smart Key e partida por botão']
  },
  {
    id: '7',
    brand: 'Jeep',
    name: 'COMPASS',
    fullTitle: 'JEEP COMPASS',
    version: '1.3 T270 FLEX LONGITUDE AUTOMATICO',
    price: 138900,
    monthlyInstallment: 1951,
    year: '2022/2023',
    yearNum: 2023,
    km: 34500,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Flex',
    bodyType: 'SUV',
    color: 'Preto',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 18,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Motor Turbo 185cv', 'Central Uconnect 10.1"', 'Ar Dual Zone', 'Bancos em couro premium']
  },
  {
    id: '8',
    brand: 'Volkswagen',
    name: 'NIVUS',
    fullTitle: 'VOLKSWAGEN NIVUS',
    version: '1.0 200 TSI FLEX HIGHLINE AUTOMATICO',
    price: 126900,
    monthlyInstallment: 1783,
    year: '2023/2024',
    yearNum: 2024,
    km: 19800,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Flex',
    bodyType: 'SUV',
    color: 'Cinza',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 15,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['ACC Piloto Automático Adaptativo', 'VW Play 10.1"', 'Painel Active Info Display', 'Frenagem autônoma de emergência']
  },
  {
    id: '9',
    brand: 'Volkswagen',
    name: 'T-CROSS',
    fullTitle: 'VOLKSWAGEN T-CROSS',
    version: '1.0 200 TSI FLEX COMFORTLINE AUTOMATICO',
    price: 112900,
    monthlyInstallment: 1586,
    year: '2021/2022',
    yearNum: 2022,
    km: 39100,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Flex',
    bodyType: 'SUV',
    color: 'Branco',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 15,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Painel Digital Active Info Display', 'Sensores dianteiro e traseiro', 'Detector de fadiga']
  },
  {
    id: '10',
    brand: 'Toyota',
    name: 'COROLLA',
    fullTitle: 'TOYOTA COROLLA',
    version: '2.0 VVT-IE FLEX XEI DIRECT SHIFT',
    price: 129900,
    monthlyInstallment: 1825,
    year: '2022/2023',
    yearNum: 2023,
    km: 31500,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Flex',
    bodyType: 'Sedan',
    color: 'Prata',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 16,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Toyota Safety Sense', 'Bancos em Couro', 'Chave Presencial Push Start', '7 Airbags']
  },
  {
    id: '11',
    brand: 'Fiat',
    name: 'PULSE',
    fullTitle: 'FIAT PULSE',
    version: '1.0 TURBO FLEX AUDACE AUTOMATICO',
    price: 94900,
    monthlyInstallment: 1333,
    year: '2023/2023',
    yearNum: 2023,
    km: 22100,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Flex',
    bodyType: 'SUV',
    color: 'Vermelho',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 14,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Central 10.1" sem fio', 'Frenagem autônoma de emergência', 'Assistente de permanência em faixa']
  },
  {
    id: '12',
    brand: 'Ford',
    name: 'RANGER',
    fullTitle: 'FORD RANGER',
    version: '3.0 V6 TURBO DIESEL XLT 4WD AUTOMATICO',
    price: 269900,
    monthlyInstallment: 3792,
    year: '2024/2024',
    yearNum: 2024,
    km: 15200,
    isNew: false,
    sellerType: 'Loja',
    location: 'Campinas (SP) - Loja Castelo',
    storeName: 'Loja Castelo',
    transmission: 'Automático',
    fuel: 'Diesel',
    bodyType: 'Pick-up',
    color: 'Preto',
    isFipeBelow: false,
    isInspected: true,
    photoCount: 22,
    vehicleType: 'car',
    images: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Motor V6 250cv', 'Tração 4x4 com reduzida', 'Tela Sync 4 de 12"', 'Pro Trailer Assist']
  }
];
