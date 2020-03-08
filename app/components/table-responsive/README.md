title: Responsive Tables
description: Responsive Behavior for HTML Tables

On this page, we want to put together all of the data that we will be showing in our application,
so that we can see how all of the components work together.

This implementation uses the Table compontents from the `table-responsive` component.
The component uses the base Table styles.
However, this responsive variant takes away the `display: table;` property on smaller viewports.
This means that the cells no longer have table semantics.
To fix this, we add the redundant table `role` attributes to the elements in our table.
This is encapsulated in the Macros that are available for `table-responsive`.

NOTE: As a rule, this is a risky decision.
It is best to default to using a `<table>` because the semantics are already well defined.

We also have Macros to add a collapser to a row in the `tbody`.
If you do this, you also need to add a `CollapserTh` to the `thead`
because otherwise the columns will be incorrectly interpreted by the screenreader.

This adds extra behavior to the CSS which collapses some of the cells.

This also uses the `shortLabel` option for the `TabelleHeader`,
which uses `Squishable` under the hood in order for an abbreviation of the column to be shown when there is not enough space.

```jsx
import { createElement } from "complate-stream";
import Table, { TBody, THead, Tr, Td, CollapserTh, CollapserTd } from "./app/components/table-responsive";
import TabelleToggler from "./app/components/tabelle-toggler";
import Tabelle, { TabelleHeader } from "./app/components/tabelle";
import Amount from "./app/components/amount";
import ProgressBar from "./app/components/progress-bar";

<div style="background-color: var(--background-color); padding: 1rem;">
  <h1 class="sr-only">Hidden heading to help with screenreader tests</h1>
  <Table>
    <THead>
      <Tr>
        <CollapserTh label="Expand/Collapse Order" sorted="asc" />
        <TabelleHeader name="auftragsnr" label="Order Number"
          shortLabel="Number" sorted="asc" />
        <TabelleHeader name="saleorder" label="Sale Order Name"    
          shortLabel="Order" />
        <TabelleHeader name="kunde" label="Customer"  />
        <TabelleHeader name="principal" label="Principal"
          shortLabel="Prinz" />
        <TabelleHeader name="freigaben" label="Approval" />
        <TabelleHeader name="status" label="Status" />
        <TabelleHeader name="netto" label="Net Price"
          shortLabel="Net" />
      </Tr>
    </THead>
    <TBody>
      {Array(5).fill().map(() => <Tr>
        <CollapserTd labelExpand="Expand order D19.10.2273"
          labelCollapse="Collapse order D19.10.2273" />
        <Td column="Auftragnr." modifier="emphasized">D19.10.2273</Td>
        <Td column="Sale Order Name">Quality-focused bandwidth-monitored parallelism</Td>
        <Td column="Kunde" modifier="muted">Stiedemann, Wolff and Pachocha</Td>
        <Td column="Principal" modifier="muted">Heribert Innoq</Td>
        <Td column="Freigaben" modifier="muted">
          <ProgressBar value="2" max="3" />
        </Td>
        <Td column="Status" modifier="muted">
          <ProgressBar modifier="green" value="1" max="5" />
        </Td>
        <Td column="Nettopreis">
          <Amount>2.575,00 €</Amount>
        </Td>
      </Tr>)}
    </TBody>
  </Table>
</div>
```
