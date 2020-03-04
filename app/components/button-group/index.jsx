import { createElement } from "complate-stream";

export default function ButtonGroup(_params, ...children) {
  return <div class="button-group">{children}</div>;
}
