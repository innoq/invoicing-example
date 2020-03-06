import { createElement } from "complate-stream";

export default function Amount({ currency, locale }, ...children) {
  let amount = children;
  if (currency && locale) {
    amount = new Intl.NumberFormat(locale, {
      style: "currency",
      currency
    }).format(amount);
  }
  return <span class="amount">{amount}</span>;
}
