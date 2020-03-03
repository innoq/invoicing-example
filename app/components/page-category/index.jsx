import { createElement } from "complate-stream";

export default function PageCategory(_params, ...children) {
  return <div class="page-category">{children}</div>;
}
