// Source catalogs are treated as DATA ONLY.
// Public branding rule: Full Generator => MKT Generators, FB=>MB, FP=>MP, FC=>MC.

export const generators = [
  {
    id: 'mkt-mb20',
    model: 'MKT MB20',
    sourceCode: 'FB 20',
    series: 'MB Series',
    engineBrand: 'Baudouin',
    engineModel: '4M06G20-5',
    standbyKva: 20,
    primeKva: 18,
    standbyKw: 16,
    primeKw: 14,
    frequency: '50 Hz',
    voltage: '400/230 V',
    type: 'Silent / Open',
    cooling: 'Water Cooling',
    controller: 'Deep Sea Controller',
    dimensions: {
      open: '2000 × 900 × 1310 mm',
      canopy: '1650 × 900 × 1460 mm'
    },
    weight: { open: '790 kg', canopy: '658 kg' },
    fuelTank: '115 L',
    fuelConsumption: { full: '4.8 L/h', load75: '3.7 L/h', load50: '2.6 L/h' },
    image: '/images/generator-placeholder.svg',
    datasheet: '/datasheets/MKT-MB20.pdf',
    slug: 'mkt-mb20-baudouin-diesel-generator'
  },
  {
    id: 'mkt-mp20',
    model: 'MKT MP20',
    sourceCode: 'FP 20',
    series: 'MP Series',
    engineBrand: 'Perkins',
    engineModel: 'Perkins engine model',
    standbyKva: 20,
    primeKva: 18,
    frequency: '50 Hz',
    voltage: '400/230 V',
    type: 'Silent / Open',
    cooling: 'Water Cooling',
    controller: 'Deep Sea Controller',
    image: '/images/generator-placeholder.svg',
    datasheet: '/datasheets/MKT-MP20.pdf',
    slug: 'mkt-mp20-perkins-diesel-generator'
  },
  {
    id: 'mkt-mc20',
    model: 'MKT MC20',
    sourceCode: 'FC 20',
    series: 'MC Series',
    engineBrand: 'Cummins',
    engineModel: 'Cummins engine model',
    standbyKva: 20,
    primeKva: 18,
    frequency: '50 Hz',
    voltage: '400/230 V',
    type: 'Silent / Open',
    cooling: 'Water Cooling',
    controller: 'Deep Sea Controller',
    image: '/images/generator-placeholder.svg',
    datasheet: '/datasheets/MKT-MC20.pdf',
    slug: 'mkt-mc20-cummins-diesel-generator'
  }
];

export const powerBrackets = [20,25,30,35,44,50,66,80,100,125,150,200,250,300,350,400,500,600,700,800,1000,1125,1250,1400,1500,1650];
export const engineBrands = ['Baudouin', 'Perkins', 'Cummins'];
