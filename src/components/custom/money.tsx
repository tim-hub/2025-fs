
export const Money: React.FC<{ value: number }> = ({ value }) => (
  <span className="tabular-nums">${value.toFixed(2)}</span>
);