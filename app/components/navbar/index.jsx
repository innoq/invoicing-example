import { createElement } from "complate-stream";

export function NavbarLayout(_params, ...children) {
  return <div class="navbar-layout">{children}</div>;
}

export default function Navbar(_params, ...children) {
  return <nav class="navbar">{children}</nav>;
}

export function NavbarItem({ href }, ...children) {
  let [first, ...rest] = children;
  return (
    <a class="navbar-item" href={href}>
      <div class="symbol">{first}</div>
      <div class="label">{rest}</div>
    </a>
  );
}
