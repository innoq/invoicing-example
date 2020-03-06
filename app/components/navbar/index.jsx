import { createElement } from "complate-stream";

export function NavbarLayout(_params, ...children) {
  return <div class="navbar-layout">{children}</div>;
}

export default function Navbar(_params, ...children) {
  return <nav class="navbar">{children}</nav>;
}

export function SecondaryNavbar(_params, ...children) {
  return <nav class="secondary-navbar">{children}</nav>;
}

export function NavbarItem({ href, current }, ...children) {
  let [first, ...rest] = children;
  return (
    <a class={`navbar-item ${current ? "current" : ""}`} href={href}>
      <div class="symbol">{first}</div>
      <div class="label">{rest}</div>
    </a>
  );
}

export function NavbarBrand({ href }, ...children) {
  let [first, ...rest] = children;
  return (
    <a class={`navbar-item brand`} href={href}>
      <div class="symbol">{first}</div>
      <div class="label">{rest}</div>
    </a>
  );
}
