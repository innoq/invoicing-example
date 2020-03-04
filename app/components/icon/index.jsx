import { createElement } from "complate-stream";

export default function Icon({ symbol }) {
  return <span class={`icon icon-${symbol}`} role="presentation"></span>;
}
