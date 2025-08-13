export const Money = ({ value }: { value: BigNumber }) => {
  let valueStr = value.toString();

  if (value.isGreaterThan(1000000000000)) {
    valueStr = value.toExponential(2)
  } else if (value.isGreaterThan(1000000000)) {
    valueStr = value.dividedBy(1000000000).toFixed(2) + 'Billion';
  } else if (value.isGreaterThan(1000000)) {
    valueStr = value.dividedBy(1000000).toFixed(2) + 'Million';
  }

  return (
    <span className="tabular-nums">${valueStr}</span>
  );
}