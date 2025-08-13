const RegionTaxMap: Map<string, number> = new Map([
  ['AUK', 0.0685],
  ['WLG', 0.08],
  ['WAI', 0.0625],
  ['CHC', 0.04],
  ['TAS', 0.0825]
])

export const getRegionTax = (region: string): number => {
  const tax = RegionTaxMap.get(region);
  return tax !== undefined ? tax : 0;
};

export const REGIONS = Array.from(RegionTaxMap.keys());