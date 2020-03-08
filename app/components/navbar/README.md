title: Navbar
description: Providing a consistent Navbar and Layout

This component actually consists of two separate components which work together:

the `NavbarLayout` provides a container into which the `Navbar` and any other content can be placed.

The reason for this constellation is that `NavbarLayout` uses CSS grid to decide on the position of the `Navbar` and it's width.

`NavbarLayout` expects the following HTML children:

* A navbar component that is annotated with the class `navbar`
* The main content that will be placed in the main content area

It will be adjusted responsively based on the size of the viewport.

### Mobile Viewport

```jsx width=320
import { createElement } from "complate-stream";
import { NavbarLayout } from "./app/components/navbar";

<NavbarLayout>
  <div class="navbar">
    <p style="color: white;">This is the region for the navbar.</p>
  </div>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
</NavbarLayout>
```

### Responsive Behavior

```jsx
import { createElement } from "complate-stream";
import { NavbarLayout } from "./app/components/navbar";

<NavbarLayout>
  <div class="navbar">
    <p style="color: white;">This is the region for the navbar.</p>
  </div>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
</NavbarLayout>
```


The `Navbar` component itself can then be placed inside of the `NavbarLayout`.

A `Navbar` component can contain any number of items. These are simply basic HTML elements like an `a` tag.

```jsx
import { createElement } from "complate-stream";
import Navbar, { NavbarLayout, NavbarItem, SecondaryNavbar, NavbarBrand } from "./app/components/navbar";
import Icon from "./app/components/icon";

<NavbarLayout>
  <Navbar>
    <NavbarBrand href="#">
      <Icon symbol="INNOQ" />
      Zur Rechnologe Hauptseite
    </NavbarBrand>
    <NavbarItem href="#">
      <Icon symbol="list-bulleted" />
      Meine Aufgaben
    </NavbarItem>
    <NavbarItem href="#" current>
      <Icon symbol="upload" />
      Rechnungserstellung
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="download" />
      Zahlungseingang
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="alarm" />
      Zahlungserinnerungen
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="dots" />
      Mehr
    </NavbarItem>
  </Navbar>
  <SecondaryNavbar>
    <NavbarItem current>
      <Icon symbol="snooze" />
      Abwarten
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="bolt" />
      Nachhacken
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="pencil" />
      Nachhacken
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="crown" />
      Freigeben lassen
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="plane" />
      Versenden
    </NavbarItem>
  </SecondaryNavbar>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
</NavbarLayout>
```

### Mobile Viewport

```jsx width=320
import { createElement } from "complate-stream";
import Navbar, { NavbarLayout, NavbarItem, SecondaryNavbar } from "./app/components/navbar";
import Icon from "./app/components/icon";

<NavbarLayout>
  <Navbar>
    <NavbarItem href="#" current>
      <Icon symbol="list-bulleted" />
      Meine Aufgaben
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="upload" />
      Rechnungserstellung
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="download" />
      Zahlungseingang
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="alarm" />
      Zahlungserinnerungen
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="dots" />
      Mehr
    </NavbarItem>
  </Navbar>
  <SecondaryNavbar>
    <NavbarItem>
      <Icon symbol="snooze" />
      Abwarten
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="bolt" />
      Nachhacken
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="pencil" />
      Nachhacken
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="crown" />
      Freigeben lassen
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="plane" />
      Versenden
    </NavbarItem>
  </SecondaryNavbar>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
</NavbarLayout>
```


Just instantiating the `Navbar` component outside of the navbar layout will position it at the top of the page (or at the position you place it in the document flow).

```jsx
import { createElement } from "complate-stream";
import Navbar, { NavbarItem, SecondaryNavbar } from "./app/components/navbar";
import Icon from "./app/components/icon";

<div>
  <Navbar>
    <NavbarItem href="#" current>
      <Icon symbol="list-bulleted" />
      Meine Aufgaben
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="upload" />
      Rechnungserstellung
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="download" />
      Zahlungseingang
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="alarm" />
      Zahlungserinnerungen
    </NavbarItem>
    <NavbarItem href="#">
      <Icon symbol="dots" />
      Mehr
    </NavbarItem>
  </Navbar>
  <SecondaryNavbar>
    <NavbarItem>
      <Icon symbol="snooze" />
      Abwarten
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="bolt" />
      Nachhacken
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="pencil" />
      Nachhacken
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="crown" />
      Freigeben lassen
    </NavbarItem>
    <NavbarItem>
      <Icon symbol="plane" />
      Versenden
    </NavbarItem>
  </SecondaryNavbar>
  <main style="height: 300px; background-color: var(--background-color);">
    This is the region for the main content area.
  </main>
</div>
```