import { createElement } from "complate-stream";

export default function MainLayout(_params, ...children) {
  return <main class="main-layout">{children}</main>;
}
