export function priceFormat(price: number) {
  const aroundMoney = Math.round(price);

  const format = `$${aroundMoney.toLocaleString("en-IN")}`;

  return { aroundMoney, format };
}
