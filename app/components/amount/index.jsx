import { createElement } from "complate-stream";

export default function Amount(_params, ...children) {
  return <span class="amount">{children}</span>;
}
