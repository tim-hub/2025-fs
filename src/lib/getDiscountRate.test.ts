import { getDiscountRate } from './getDiscountRate';


describe('getDiscountRate', () => {
  test('returns 0 for order value <= 1000', () => {
    expect(getDiscountRate(1000)).toBe(0);
  })
  // matrix test
  test.each([
    [1001, 0.03],
    [5000, 0.05],
    [7000, 0.07],
    [10000, 0.1],
    [50000, 0.15],
    [100000, 0.15],
  ])('returns correct discount rate for order value %d', (orderValue, expectedRate) => {
    expect(getDiscountRate(orderValue)).toBe(expectedRate);
  });
})