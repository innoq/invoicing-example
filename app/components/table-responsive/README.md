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

<div style="background-color: var(--background-color); padding: 1rem;">
  <h1 class="sr-only">Responsive Table</h1>
  <Table>
    <THead>
      <Tr>
        <CollapserTh label="Einträge auf/zuklappen" />
        <TabelleHeader name="auftragsnr" label="Auftragsnr."  
          shortLabel="Auftrag" sorted="asc" />
        <TabelleHeader name="saleorder" label="Sale Order Name"    
          shortLabel="Order" sorted="asc" />
        <TabelleHeader name="kunde" label="Kunde" sorted="asc" />
        <TabelleHeader name="principal" label="Principal"
          shortLabel="Prinz" sorted="asc" />
        <TabelleHeader name="freigaben" label="Freigaben" sorted="asc" />
        <TabelleHeader name="status" label="Status" sorted="asc" />
        <TabelleHeader name="netto" label="Nettopreis"
          shortLabel="Netto" sorted="asc" />
      </Tr>
    </THead>
    <TBody>
      {Array(5).fill().map(() => <Tr>
        <CollapserTd labelExpand="Auftrag D19.10.2273 aufklappen"
          labelCollapse="Auftrag D19.10.2273 zuklappen" />
        <Td column="Auftragnr." modifier="emphasized">D19.10.2273</Td>
        <Td column="Sale Order Name">Quality-focused bandwidth-monitored parallelism</Td>
        <Td column="Kunde" modifier="muted">Stiedemann, Wolff and Pachocha</Td>
        <Td column="Principal" modifier="muted">Jörg Müller</Td>
        <Td column="Freigaben" modifier="muted">2 / 3</Td>
        <Td column="Status" modifier="muted">1 / 5</Td>
        <Td column="Nettopreis">
          <Amount>2.575,00 €</Amount>
        </Td>
      </Tr>)}
    </TBody>
  </Table>
</div>
```
