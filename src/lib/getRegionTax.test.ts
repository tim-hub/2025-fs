import { getRegionTax, REGIONS } from './getRegionTax';

describe('getRegionTax', () => {
  it('should return the correct tax for a valid region', () => {
    expect(getRegionTax('AUK')).toBe(0.0685);
  })
//   matrix test
  it.each([
    ['AUK', 0.0685],
    ['WLG', 0.08],
    ['WAI', 0.0625],
    ['CHC', 0.04],
    ['TAS', 0.0825],
  ])('returns correct tax for region %s', (region, expectedTax) => {
    expect(getRegionTax(region)).toBe(expectedTax);
  });

  it('should have 5 regions', () => {
    expect(REGIONS.length).toBe(5);
    expect(REGIONS).toContain('AUK');
    expect(REGIONS).toContain('WLG');
    expect(REGIONS).toContain('WAI');
    expect(REGIONS).toContain('CHC');
    expect(REGIONS).toContain('TAS');
  })
})