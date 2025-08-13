
export const getDiscountRate = (orderValue: number): number => {

  if (orderValue >= 50000) {
    return 0.15
  }
  else if (orderValue >= 10000) {
    return 0.1
  }
  else if (orderValue >= 7000) {
    return 0.07
  }
  else if (orderValue >= 5000) {
    return 0.05
  }
  else if (orderValue >= 1000) {
    return 0.03
  }
  else {
    return 0
  }
}