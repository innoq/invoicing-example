title: Main Layout
description: Provides a layout component for the main content area

This component provides layout styling for the `main` element which provides one basic page layout.

To create different layouts of this main content area in the future it is best to
create a different CSS class.

In this layout, we expect the following elements to be included as children:

* `PageCategory` component with the page category
* An `h1` element containing the page title
* A `ButtonGroup` component containing any actions relevant for the page

Following these elements, you can treat this component like a generic container:
Any other elements will be placed in a single column in the content area.

## Mobile Viewport

```jsx width=350
import { createElement } from "complate-stream";
import Button from "./app/components/button";
import PageCategory from "./app/components/page-category";
import ButtonGroup from "./app/components/button-group";
import MainLayout from "./app/components/main-layout";

<div style="background-color: var(--background-color);">
  <MainLayout>
    <PageCategory>Rechnungserstellung</PageCategory>
    <h1>Keine freizugebenden Leistungen</h1>
    <ButtonGroup>
      <Button modifier="tertiary">Faule erinnern</Button>
      <Button>Neue Rechnung</Button>
    </ButtonGroup>
    <div style="background-color: var(--brand-blue); color: white; min-height: 10rem;">
      Main content comes here!
    </div>
  </MainLayout>
</div>
```

## Larger Viewports

```jsx
import { createElement } from "complate-stream";
import Button from "./app/components/button";
import PageCategory from "./app/components/page-category";
import ButtonGroup from "./app/components/button-group";
import MainLayout from "./app/components/main-layout";

<div style="background-color: var(--background-color);">
  <MainLayout>
    <PageCategory>Rechnungserstellung</PageCategory>
    <h1>Keine freizugebenden Leistungen</h1>
    <ButtonGroup>
      <Button modifier="tertiary">Faule erinnern</Button>
      <Button>Neue Rechnung</Button>
    </ButtonGroup>
    <div style="background-color: var(--brand-blue); color: white; min-height: 10rem;">
      Main content comes here!
    </div>
  </MainLayout>
</div>
```