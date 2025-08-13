import { getDiscountRate } from './getDiscountRate';


describe('getDiscountRate', () => {
  test('returns 0 for order value <= 1000', () => {
    expect(getDiscountRate(1000)).toBe(0);
  })
})