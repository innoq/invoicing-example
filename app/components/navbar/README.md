title: Navbar
description: Providing a consistent Navbar and Layout

This component actually consists of two separate components which work together:

the `NavbarLayout` provides a container into which the `Navbar` and any other content can be placed.

The reason for this constellation is that `NavbarLayout` uses CSS grid to decide on the position of the `Navbar` and it's width.

`NavbarLayout` expects the following HTML children:

* A navbar component that is annotated with the class `navbar`
* The main content that will be placed in the main content area

It will be adjusted responsively based on the size of the viewport.

```jsx
import { createElement } from "complate-stream";
import { NavbarLayout } from "./app/components/navbar";

<NavbarLayout>
  <div class="navbar">
    <p style="color: white;">This is the region for the navbar.</p>
  </div>
  <main style="height: 300px; border: 1px solid black;">
    This is the region for the main content area.
  </main>
</NavbarLayout>
```


The `Navbar` component itself can then be placed inside of the `NavbarLayout`.

A `Navbar` component can contain any number of items. These are simply basic HTML elements like an `a` tag.

```jsx
import { createElement } from "complate-stream";
import Navbar, { NavbarLayout, NavbarItem } from "./app/components/navbar";

<NavbarLayout>
  <Navbar>
    <NavbarItem href="#">
      <span>A</span>
      <span>Apricots</span>
    </NavbarItem>
    <NavbarItem href="#">
      <span>B</span>
      <span>Buttons</span>
    </NavbarItem>
    <NavbarItem href="#">
      <span>C</span>
      <span>Cookies</span>
    </NavbarItem>
    <NavbarItem href="#">
      <span>D</span>
      <span>Dogs</span>
    </NavbarItem>
  </Navbar>
  <main style="height: 300px; border: 1px solid black;">
    This is the region for the main content area.
  </main>
</NavbarLayout>
```


Just instantiating the `Navbar` component outside of the navbar layout will position it at the top of the page (or at the position you place it in the document flow).

```jsx
import { createElement } from "complate-stream";
import Navbar, { NavbarItem } from "./app/components/navbar";

<div>
  <Navbar>
    <NavbarItem href="#">
      <span>A</span>
      <span>Apricots</span>
    </NavbarItem>
    <NavbarItem href="#">
      <span>B</span>
      <span>Buttons</span>
    </NavbarItem>
    <NavbarItem href="#">
      <span>C</span>
      <span>Cookies</span>
    </NavbarItem>
    <NavbarItem href="#">
      <span>D</span>
      <span>Dogs</span>
    </NavbarItem>
  </Navbar>
  <main style="height: 300px; border: 1px solid black;">
    This is the region for the main content area.
  </main>
</div>
```