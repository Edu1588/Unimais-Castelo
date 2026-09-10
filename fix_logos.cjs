const fs = require('fs');
let content = fs.readFileSync('src/data/mockVehicles.ts', 'utf-8');

const oldBrands = `export const brands: Brand[] = [
  { id: 'bmw', name: 'BMW', logo: 'https://cdn.worldvectorlogo.com/logos/bmw-logo.svg' },
  { id: 'chevrolet', name: 'Chevrolet', logo: 'https://cdn.worldvectorlogo.com/logos/chevrolet-1.svg' },
  { id: 'volkswagen', name: 'Volkswagen', logo: 'https://cdn.worldvectorlogo.com/logos/volkswagen-logo-2019.svg' },
  { id: 'hyundai', name: 'Hyundai', logo: 'https://cdn.worldvectorlogo.com/logos/hyundai-motor-company-2.svg' },
  { id: 'toyota', name: 'Toyota', logo: 'https://cdn.worldvectorlogo.com/logos/toyota-3.svg' },
  { id: 'honda', name: 'Honda', logo: 'https://cdn.worldvectorlogo.com/logos/honda-15.svg' },
  { id: 'jeep', name: 'Jeep', logo: 'https://cdn.worldvectorlogo.com/logos/jeep-2.svg' },
  { id: 'fiat', name: 'Fiat', logo: 'https://cdn.worldvectorlogo.com/logos/fiat-3.svg' },
  { id: 'ford', name: 'Ford', logo: 'https://cdn.worldvectorlogo.com/logos/ford-8.svg' },
  { id: 'renault', name: 'Renault', logo: 'https://cdn.worldvectorlogo.com/logos/renault-2021.svg' },
  { id: 'nissan', name: 'Nissan', logo: 'https://cdn.worldvectorlogo.com/logos/nissan-2020.svg' },
  { id: 'peugeot', name: 'Peugeot', logo: 'https://cdn.worldvectorlogo.com/logos/peugeot-2021.svg' }
];`;

const newBrands = `export const brands: Brand[] = [
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
];`;

content = content.replace(oldBrands, newBrands);
fs.writeFileSync('src/data/mockVehicles.ts', content);
